import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import Image from "next/image";

const Cards = ({CardImage}) => {
    return(
        <>
            <Card className="border-2 border-solid border-white">
                <Image
                    src={CardImage}
                    alt="card"
                    width={100}
                    height={100}
                    className="h-[250px] w-full object-cover"
                    unoptimized
                />
                <CardContent>
                    <div className="mb-2 flex items-center justify-between">
                    <h3 color="blue-gray" className="font-medium">
                        Apple AirPods
                    </h3>
                    <h3 color="blue-gray" className="font-medium">
                        $95.00
                    </h3>
                    </div>
                    <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                    >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                    </Typography>
                </CardContent>
                <CardActions className="pt-0">
                    <Button
                        sx={{fontFamily: "Poppins"}}
                        variant="contained"
                        className="bg-blue-gray-900/10 text-blue-gray-900 w-full"
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards;