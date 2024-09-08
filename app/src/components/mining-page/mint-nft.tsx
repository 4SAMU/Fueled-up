import React, { useState } from "react";
import {
  MintNftContainer,
  DragNDropPic,
  InputField,
  TextAreaField,
} from "./mining-styles";
import { Box, LinearProgress } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { PrimaryButton } from "../layouts/layout-styles";

type FileType = File | null;

const simulateUpload = (setProgress: any) => {
  let simulatedProgress = 0;
  const intervalId = setInterval(() => {
    simulatedProgress += 20;
    setProgress(simulatedProgress);
    if (simulatedProgress >= 100) {
      clearInterval(intervalId);
    }
  }, 100);
};

const MintNft = () => {
  const [selectedFile, setSelectedFile] = useState<FileType>(null);
  const [progress, setProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [listingPrice, setListingPrice] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    simulateUpload(setProgress);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    simulateUpload(setProgress);
  };

  const handleNftMinting = () => {
    if (!selectedFile) {
      alert("Please select an image");
      return;
    }
    if (!nftName) {
      alert("Please enter Nft Name");
      return;
    }
    if (!nftDescription) {
      alert("Please enter Nft Description");
      return;
    }
    if (!listingPrice) {
      alert("Please enter Listing Price");
      return;
    }
    alert("Nft Minted Successfully");
  };
  return (
    <MintNftContainer>
      <DragNDropPic onDragOver={handleDragOver} onDrop={handleDrop}>
        <label>Add Nft Image</label>
        <Box className="upload_box">
          {/* <Image src={UploadImageIcon} alt="arrow" /> */}
          <AddPhotoAlternateOutlinedIcon sx={{ color: "#707070" }} />
          <Box className="upload_text">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label htmlFor="fileInput">
              <span>Upload a file</span>{" "}
            </label>
            or drag and drop
          </Box>
          <Box className="upload_text small_size">PNG, JPG, GIF up to 10MB</Box>

          {selectedFile && (
            <Box>
              <LinearProgress
                variant="determinate"
                value={progress}
                color="success"
                sx={{ width: "100px", color: "#46aa40", margin: "auto" }}
              />
              {progress === 100 && (
                <Box className="selected-file">{selectedFile.name}</Box>
              )}
            </Box>
          )}
        </Box>
      </DragNDropPic>
      <label>Nft Name</label>
      <InputField
        type="text"
        placeholder="Enter Nft Name"
        value={nftName}
        onChange={(e) => setNftName(e.target.value)}
      />
      <label>Nft Description</label>
      <TextAreaField
        placeholder="Enter Nft Description"
        value={nftDescription}
        onChange={(e) => setNftDescription(e.target.value)}
      />
      <label>Listing Price</label>
      <InputField
        type="number"
        placeholder="Enter listing Price"
        value={listingPrice}
        onChange={(e) => setListingPrice(e.target.value)}
      />
      <PrimaryButton
        sx={{ fontWeight: "300", borderRadius: "6px", fontSize: "14px" }}
        onClick={handleNftMinting}
        disabled={
          !selectedFile ||
          !nftName ||
          !nftDescription ||
          !listingPrice ||
          Number(listingPrice) <= 0
        }
      >
        Mint Nft
      </PrimaryButton>
    </MintNftContainer>
  );
};

export default MintNft;
