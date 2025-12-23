/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let cur = dummy

    while (list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2
            list2 = list2.next
        } else {
            cur.next = list1
            list1 = list1.next
        }
        
        cur = cur.next;
    }

    cur.next = list1 || list2

    return dummy.next
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// create linked list
function createLinkedList(values) {
    if (values.length === 0) return null

    let head = new ListNode(values[0])
    let current = head

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i])
        current = current.next
    }

    return head
}

const list1 = createLinkedList([1, 2, 4])
const list2 = createLinkedList([1, 3, 4])
const result = mergeTwoLists(list1, list2)
console.log("result", result.next.next.next.next.next.next) // should be [1, 1, 2, 3, 4, 4]

// list1:  1 2 4
// list2:  1 3 4
// result: 1 1 2 3 4 4