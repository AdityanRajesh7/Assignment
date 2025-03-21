function findLocate() {
    const str = "Please locate where 'locate' occurs!";
    const firstIndex = str.indexOf('locate');
    const lastIndex = str.lastIndexOf('locate');
    console.log(`First occurrence of 'locate': ${firstIndex}`);
    console.log(`Last occurrence of 'locate': ${lastIndex}`);
}
findLocate();