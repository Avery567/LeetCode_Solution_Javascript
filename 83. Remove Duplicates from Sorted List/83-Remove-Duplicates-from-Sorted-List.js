var deleteDuplicates = function(head) {
    let current = head;

//let current node equal to head and keep track of current node

    while(current !== null && current.next !== null){

//while (note 1) current node and the next node exist 

        if(current.val === current.next.val){

//if current value of the node equal (note 2) to the next node

            current.next = current.next.next

//skip over the next node to the node after that and starts next
//loop

        } else {
            current = current.next

//if not, move current to the next node and starts next loop

        }
    }

    return head
};