/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const getIntersect = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return slow;
    }
  }
  return null;
};
var detectCycle = function (head) {
  if (head === null) return null;
  let intersect = getIntersect(head);
  if (intersect === null) return null;

  ptr1 = head;
  ptr2 = intersect;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return ptr1;
};
