contract;

use std::hash::Hash;
// use std::{ asset::{transfer}};

storage {
    /// The initial points awarded to a user.
    initial_points: u64 = 2000,

    /// Check if the user has been awarded initial allocation.
    has_been_awarded_initial_allocation: StorageMap<Identity, bool> = StorageMap {},

    /// The total points awarded to each user.
    total_points: StorageMap<Identity, u64> = StorageMap {},

    /// The points awarded to a user for minting an NFT.
    minting_points: u64 = 50,

    /// The points awarded to a user for reselling an NFT.
    reselling_points: u64 = 100,

    /// The points awarded to a user for buying an NFT (calculated based on the price of the NFT).
    buying_points: u64 = 0,

    /// The total staking points.
    total_staking_points: StorageMap<Identity, u64> = StorageMap {},

    /// The points awarded to a user for staking points.
    reward_staking_points: StorageMap<Identity, u64> = StorageMap {},

    /// APY (annual percentage yield) for staking.

    /// 5 days period.
    apy_5: u64 = 50,

    /// 3 days period.
    apy_3: u64 = 25,

    /// 1 day period.
    apy_1: u64 = 10,

    // /// fl_contract_address
    // fl_contract_id: ContractId = ContractId::from(0xe5122d4b6a69d79c02382aedc754ef043d70e46ebb8b2e3e71149c4de8605f87),

}

abi RewardPoints {
    /// Sets the initial allocation of points for a user.
    #[storage(read, write)]
    fn set_awarded_initial_allocation(user: Identity);

    /// Awards a specified number of points to a user.
    #[storage(read, write)]
    fn award_points(user: Identity, points: u64);

    /// Retrieves the total points of a user.
    #[storage(read)]
    fn get_total_points(user: Identity) -> u64;

    /// Checks if a user is eligible to claim points.
    #[storage(read)]
    fn is_claimable(user: Identity) -> bool;

    /// Allows a user to claim points.
    #[storage(read, write)]
    fn claim_points(user: Identity, is_transfered: bool, amount_to_claim: u64);

    /// Stakes a specified number of points for a user.
    #[storage(read, write)]
    fn stake_points(user: Identity, points: u64);

    /// Retrieves the total staking points of a user.
    #[storage(read)]
    fn get_total_staking_points(user: Identity) -> u64;

    /// Calculates and retrieves the reward staking points for a user based on the APY period.
    #[storage(read, write)]
    fn get_reward_staking_points(user: Identity, points: u64);

    /// Retrieves the points awarded for minting an NFT.
    #[storage(read)]
    fn minting_points() -> u64;

    /// Retrieves the points awarded for reselling an NFT.
    #[storage(read)]
    fn reselling_points() -> u64;

    /// Retrieves the points awarded for buying an NFT.
    #[storage(read)]
    fn buying_points() -> u64;

    // /// transfer fl tokens using fl contract
    // #[storage(read, write)]
    // fn transfer_fl_tokens(to: Identity, amount: u64);   

}

impl RewardPoints for Contract {
    /// Sets the initial allocation of points for a user.
    #[storage(read, write)]
    fn set_awarded_initial_allocation(user: Identity) { 
        let has_been_awarded: bool = storage.has_been_awarded_initial_allocation.get(user).try_read().unwrap_or(false);   
        require(has_been_awarded, "Initial allocation has already been awarded");
        storage.total_points.insert(user, storage.initial_points.read());
        storage.has_been_awarded_initial_allocation.insert(user, true)
    }

    /// Awards a specified number of points to a user.
    #[storage(read, write)]
    fn award_points(user: Identity, points: u64) {
        let current_points = storage.total_points.get(user).try_read().unwrap_or(0);
        storage.total_points.insert(user, current_points + points);
    }

    /// Retrieves the total points of a user.
    #[storage(read)]
    fn get_total_points(user: Identity) -> u64 {
        storage.total_points.get(user).try_read().unwrap_or(0)
    }

    /// Checks if a user is eligible to claim points.
    #[storage(read)]
    fn is_claimable(user: Identity) -> bool {
       let total_points = storage.total_points.get(user).try_read().unwrap_or(0);
       total_points >= 10_000       
    }

    /// Allows a user to claim points.
    #[storage(read, write)]
    fn claim_points(user: Identity, is_transfered: bool, amount_to_claim: u64) {
        let total_points = storage.total_points.get(user).try_read().unwrap_or(0);
        if(is_transfered){
            require(total_points >= 10_000, "You do not have enough points to claim");
            require(total_points < amount_to_claim,"You can not claim more than your total points");
            storage.total_points.insert(user, total_points - amount_to_claim);
        }       
    }

    /// Retrieves the total staking points of a user.
    #[storage(read)]
    fn get_total_staking_points(user: Identity) -> u64 {
        storage.total_staking_points.get(user).try_read().unwrap_or(0)
    }

    /// Stakes a specified number of points for a user.
    #[storage(read, write)]
    fn stake_points(user: Identity, points_to_stake: u64) {
        let current_points = storage.total_points.get(user).try_read().unwrap_or(0);
        require(current_points >= points_to_stake, "Not enough points to stake");
        storage.total_points.insert(user, current_points - points_to_stake);

        let current_staking_points = storage.total_staking_points.get(user).try_read().unwrap_or(0);
        storage.total_staking_points.insert(user, current_staking_points + points_to_stake);
    }

    /// Calculates and retrieves the reward staking points for a user based on the APY period.
    #[storage(read, write)]
    fn get_reward_staking_points(user: Identity, apy_period: u64) {
        let current_staking_points = storage.total_staking_points.get(user).try_read().unwrap_or(0);
        if(apy_period == 5){
          let apy_5 = storage.apy_5.read();
          let reward_to_get=((apy_5/100)/365);
          let reward = current_staking_points * reward_to_get;
          storage.reward_staking_points.insert(user, reward);       
        }else if(apy_period == 3){
          let apy_3 = storage.apy_3.read();
          let reward_to_get=((apy_3/100)/365);
          let reward = current_staking_points * reward_to_get;
          storage.reward_staking_points.insert(user, reward);
        }else if(apy_period == 1){
            let apy_1 = storage.apy_1.read();
            let reward_to_get=((apy_1/100)/365);
            let reward = current_staking_points * reward_to_get;
            storage.reward_staking_points.insert(user, reward);
        }              
    }

    /// Retrieves the points awarded for minting an NFT.
    #[storage(read)]
    fn minting_points() -> u64 {
        storage.minting_points.read()
    }

    /// Retrieves the points awarded for reselling an NFT.
    #[storage(read)]
    fn reselling_points() -> u64 {
        storage.reselling_points.read()
    }

    /// Retrieves the points awarded for buying an NFT.
    #[storage(read)]
    fn buying_points() -> u64 {
        storage.buying_points.read()
    }    


    // /// transfer fl tokens using fl contract
    // #[storage(read, write)]
    // fn transfer_fl_tokens(to: Identity, amount: u64) {
    //     let fl_contract_id = storage.fl_contract_id.read();
    //     transfer(fl_contract_id, to, amount);        
    // }   
}
