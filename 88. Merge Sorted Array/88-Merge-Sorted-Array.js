var merge = function(nums1, m, nums2, n) {

    for(i = 0; i < n; i++) {

//Loop (note 5) through array 'nums2' 

        nums1.splice(m+i,1,nums2[i])

//replace element in 'nums1' with element in 'nums2' one by one
//with splice (note 4)

    }

    nums1.sort(function(a,b){return a-b})

//sort (note 3) merged array 'nums1' in a non-decreasing order

};