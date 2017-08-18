class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * @returns {number}
     */
    size() {
        return this.length;
    }

    /**
     * Return a node in the given position of the a list
     *
     * @param position
     * @returns {LinkedList.node|*|null}
     */
    get(position) {
        let currentNode = this.head;

        // Check to see if the list is empty
        if (currentNode.head === null) {
            throw new Error('List is empty');
        }

        if (position > this.length) {
            throw new Error(`Position is outside of the list range`);
        }

        for (let i = 0; i < position; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }


    /**
     * Add a node to the end of the list
     *
     * @param value
     */
    add(value) {
        /**
         * A node has a value and a pointer to the next node in the list
         *
         * @type {{value: *, next: null}}
         */
        const node = {
            value,
            next: null,
        };

        // If head is null then an value has not been added yet
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            /**
             * If the current node has a next property that is not null then we aren't at the end of the list
             * and should continue onto the next node.
             */
            while (currentNode.next) {
                currentNode = currentNode.next;
            }


            currentNode.next = node;
        }


        this.length = this.length + 1;
    };

    /**
     * Add a node to a specific position in the list
     *
     * @param value
     * @param position
     */
    addAt(value, position) {
        /**
         * A node has a value and a pointer to the next node in the list
         *
         * @type {{value: *, next: null}}
         */
        const node = {
            value,
            next: null,
        };

        // If head is null then an value has not been added yet
        if (this.head === null) {
            this.head = node;
        } else {
            const currentNode = this.get(position);
            const previousNode = this.get(position - 1);

            // Move the node that is already in the position we are inserting at to the next node
            node.next = currentNode;

            // The node previous to the newly inserted node should point to the new node
            previousNode.next = node;
        }


        this.length = this.length + 1;
    };


    removeAt(position) {
        // To remove the first node replace the current head with the next node
        if (position === 0) {
            this.head = this.head.next;
        } else {
            const currentNode = this.get(position);
            const previousNode = this.get(position - 1);

            // Otherwise 'splice' the node out by moving the pointer for the previous node to the next node
            previousNode.next = currentNode.next;
        }

        this.length = this.length - 1;
    };
}

export default LinkedList;
