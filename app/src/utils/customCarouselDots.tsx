import { Box, styled } from "@mui/material";

interface CarouselCustomDotsProps {
  itemsCount: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const CarouselCustomDots: React.FC<CarouselCustomDotsProps> = ({
  itemsCount,
  activeIndex,
  onDotClick,
}) => {
  return (
    <CarouselCustomDotsContainer
      sx={{ display: itemsCount === 1 ? "none" : "" }}
    >
      {Array.from({ length: itemsCount }).map((_, index) => (
        <Box
          className="carousel_customDots__button"
          onClick={() => onDotClick(index)}
          key={index}
        >
          <Box
            className={
              activeIndex === index
                ? "carousel_customDots active"
                : " carousel_customDots"
            }
          />
        </Box>
      ))}
    </CarouselCustomDotsContainer>
  );
};

export default CarouselCustomDots;

const CarouselCustomDotsContainer = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   transition: "all 0.3s ease-in-out",
  ".carousel_customDots__button": {
    cursor: "pointer",
    padding: "5px",
    "&:hover": {
      opacity: 0.7,
    },
  },
  ".carousel_customDots": {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    transition: "width 0.6s ease-in-out, height 0.6s ease-in-out",
    "&.active": {
      backgroundColor: "#46aa40",
    },
  },
}));
