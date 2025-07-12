import * as fs from "fs/promises";

//create directory /folder-------------------------------

// try{
//    await fs.mkdir("C:\\Users\\kumar\\OneDrive\\Desktop\\Nilesh");
//     console.log("folder created successfully" );
// }
// catch(err){
//     console.log(err);
// }








//------------reading the content----------------------

// try{
//     const files = await fs.readdir("C:\\Users\\kumar\\OneDrive\\Desktop\\Nilesh\\hello");

//     for(const file of files){
//         console.log(file);

//     }

// }catch(err){
//     console.log(err);
// }








// remove the folder or directory---------------------------

// try{
//      await fs.rmdir("C:\\Users\\kumar\\OneDrive\\Desktop\\Nilesh");
//      console.log(`removed folder Successfully`);

// }catch(err){
//     console.log(err);
// }








// create and write the files ---------------------------------------------

// try{
//     await fs.writeFile("nileshsreyansh.txt", "Hello this is Nilesh Kumar");  //---- this will replace the previous content...
//     console.log("successfully written");
// }
// catch(err){
//     console.log(err);

// }






// Read the file-----------------------------

// try{
//   const data =  await fs.readFile("nileshsreyansh.txt", "utf-8");
//     console.log(data);
// }
// catch(err){
//     console.log(err);

// }






// Apppend the file---------------------------------------------------------------------------

// try{
//   const data =  await fs.appendFile("nileshsreyansh.txt", "this is Node js Courses, that help me to learn the node js very quickly");

// }
// catch(err){
//     console.log(err);

// }








// Copy the content of the file

// try {
//   await fs.copyFile("nileshsreyansh.txt", "info.txt");
//   console.log(`copied succesfully`);
// } catch (err) {
//   console.log(err);
// }









// Get the Information about the file-------------------------------------------------------




try{
    const data =  await fs.stat("info.txt");
//    console.log(data);
    console.log(data.isFile());
    console.log(data.isDirectory());
    
    




}catch(err){
    console.log(err);
}