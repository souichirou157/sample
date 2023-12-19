  class ListElement {
        constructor(val) {
            this.val = val
            this.next = null;
        }
    }


    function checkListElement() {
        let prev = listHead

        while (prev) {
            console.log(`リスト${prev.val}`);
            prev = prev.next
        }
    }

    function delNode(pos) {
        let prev = null
        if (pos == 1) {
            listHead = listHead.next
        } else {
            prev = listHead
            for (let i = 2; i <= pos - 1; i++) {
                prev = prev.next
            }
            prev.next = prev.next.next
        }
    }

    let listHead = new ListElement(1)
    listHead.next = new ListElement(2)
    listHead.next.next = new ListElement(3)
    checkListElement()
    delNode(3)
    checkListElement()
