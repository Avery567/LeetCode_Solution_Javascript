var getFolderNames = function(names) {
    
    const folders = {}, counters = {}; const ans = [];

//initial three variables to respectively store name of the
//folder, count of each name if duplicated and final answer array 

    for(let i = 0; i < names.length; i++) {

//Loop through each name in the given array

        const name = names[i];
        let folderName = name, num = counters[name] || 1;

//if the ith name in the 'names' array is seen in 'counters', then
//assign it's value to num, otherwise num = 1.

        while(folders[folderName] !== undefined) {

//if the ith name in the 'names' array is seen in 'folders'

            folderName = `${name}(${num++})`;

//update folder name to the original name + number of time
//appeared

        }
        folders[folderName] = i;

//if the ith name in the 'names' array is NOT seen in 'folders',
//assign i as it's value.

        counters[name] = num;

//if the ith name in the 'names' array is NOT seen in 'counters',
//assign num as it's value.

        ans.push(folderName);

//Push updated folder name in the answer array

    }

    return ans;
};