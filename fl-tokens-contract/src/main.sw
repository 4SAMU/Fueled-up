contract;

use standards::src20::SRC20;
use std::string::String;

configurable {
    /// The total supply of coins for the asset minted by this contract.
    TOTAL_SUPPLY: u64 = 100_000_000,
    /// The decimals of the asset minted by this contract.
    DECIMALS: u8 = 9u8,
    /// The name of the asset minted by this contract.
    NAME: str[6] = __to_str_array("FUELED"),
    /// The symbol of the asset minted by this contract.
    SYMBOL: str[2] = __to_str_array("FL"),
}

impl SRC20 for Contract {
    /// Returns the total number of individual assets minted by a contract.
    #[storage(read)]
    fn total_assets() -> u64 {
        1
    }

    /// Returns the total supply of coins for the asset.
    #[storage(read)]
    fn total_supply(asset: AssetId) -> Option<u64> {
        if asset == AssetId::default() {
            Some(TOTAL_SUPPLY)
        } else {
            None
        }
    }

    /// Returns the name of the asset.
    #[storage(read)]
    fn name(asset: AssetId) -> Option<String> {
        if asset == AssetId::default() {
            Some(String::from_ascii_str(from_str_array(NAME)))
        } else {
            None
        }
    }

    /// Returns the symbol of the asset.
    #[storage(read)]
    fn symbol(asset: AssetId) -> Option<String> {
        if asset == AssetId::default() {
            Some(String::from_ascii_str(from_str_array(SYMBOL)))
        } else {
            None
        }
    }

    /// Returns the number of decimals the asset uses.
    #[storage(read)]
    fn decimals(asset: AssetId) -> Option<u8> {
        if asset == AssetId::default() {
            Some(DECIMALS)
        } else {
            None
        }
    }
}
