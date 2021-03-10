
// O(n)
function printDirections(initial, target){
    if(initial.length !== target.length) return
    if(initial.length < 1) return

    console.log('initial', initial);
    console.log('target', target);
    
    const correctPos = {};
    let i = 0;
    for(i=0; i < target.length; i++){
        correctPos[target[i]] = i;
    }
    
    let empty_i = -1;
    for(i=0; i < initial.length; i++){
        if(initial[i] === 0){
            empty_i = i;
            break;
        }
    }

    console.log('empty_i', empty_i);
    console.log('correctPos', correctPos);
    
    i = 0;
    let curr_pos = i;
    let impostor;
    while(curr_pos < initial.length){
        curr_v = initial[curr_pos]; 
        if(curr_pos != correctPos[curr_v] && curr_v != 0){
            
            if(correctPos[curr_v] != empty_i){
                impostor = initial[ correctPos[curr_v] ];
                initial[ correctPos[curr_v] ] = 0;
                initial[empty_i] = impostor;
                console.log('Move car ' + impostor + ' from space ' + correctPos[curr_v] + ' to space ' + empty_i);
                console.log(initial);
                next_curr_pos = empty_i;
                empty_i = correctPos[curr_v];
            }
            
            initial[empty_i] = curr_v;
            initial[curr_pos] = 0;
            console.log('Move car ' + curr_v + ' from space ' + curr_pos + ' to space ' + empty_i);
            console.log(initial);
            empty_i = curr_pos;
            curr_pos = next_curr_pos;

        }else{
            console.log('correct or empty!');
            i += 1;
            curr_pos = i;
        }
    } 
    console.log('-------------------');
    console.log('initial', initial);
    console.log('target', target);
    
}

printDirections([0,4,2,5,1,3], [0,1,5,3,2,4]);
