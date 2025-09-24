function recursiva(max){
    console.log(max);
    if(max >= 1606) return;
    max++;
    recursiva(max);
}

recursiva(0);