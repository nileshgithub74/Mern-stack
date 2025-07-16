
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const createMovies = async() =>{
     const newMovie = await prisma.movie.create({
        data: {
            title : " Border-2",
        description : "india- pak war",
        releaseDate : new Date("2020-02-23"),
        rating : 8.9,
        genre: "sci-fi",
        },
    }

)


    console.log("Movie created:", newMovie);

};













async function main () {
    await createMovies();






    
}


main().then( async() => await prisma.$disconnect())
      .catch((e)=>{
        console.log(e);
        prisma.$disconnect();
        process.exit(1);
      })