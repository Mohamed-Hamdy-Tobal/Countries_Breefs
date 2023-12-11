/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

export function CardCountry({name, population, region, capital, flag}) {

  return (
    <Card className="w-full h-full justify-between text-LMT dark:text-white dark:bg-DME">
      <CardHeader color="blue-gray" className="relative mb-5 dark:shadow-lg">
        <img
          src={flag}
          alt="card-image"
          className="h-full object-contain"
        />
      </CardHeader>
      <div className="info">
        <CardBody className="py-3">
          <Typography variant="h5" color="blue-gray" className="dark:text-white">
            {name}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex flex-col justify-start">
          <div><span className='opacity-1 font-bold text-[#111] dark:text-white'>Population : </span><span className="population dark:text-white opacity-[0.85]">{population}</span></div>
          <div><span className='opacity-1 font-bold text-[#111] dark:text-white'>Region : </span><span className="region dark:text-white opacity-[0.85]">{region}</span></div>
          <div><span className='opacity-1 font-bold text-[#111] dark:text-white'>Capital : </span><span className="capital dark:text-white opacity-[0.85]">{capital}</span></div>
        </CardFooter>
      </div>
    </Card>
  );
}