export const getIdPathname = pathname =>{
    let paths = pathname.split("/");
    let id = paths[paths.length - 1];
    return id;
}