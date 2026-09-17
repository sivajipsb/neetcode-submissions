class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strings) {
        
        let prefix = strings[0];

        for (let i=1; i<strings.length; i++){

        let j = 0 ;
        while(j < Math.min(prefix.length,strings[i].length)){

            if(prefix[j] !== strings[i][j]){
            break;
            }
            j++;
        }
        prefix = prefix.slice(0,j)
        }
        return prefix
    }
}
