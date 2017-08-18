import LinkedList from './LinkedList';

it('retrieves a node by position', () => {
    const List = new LinkedList();

    ['foo', 'bar', 'baz'].map((node) => {
        List.add(node);
    });

    const node = List.get(2);

    expect(node.value).toEqual('baz');
});


it('adds a node to the end of the list', () => {
    const List = new LinkedList();

    List.add('foo');
    List.add('bar');

    expect(List.head.next.value).toEqual('bar');
});


it('increases in size', () => {
    const List = new LinkedList();

    List.add('foo');

    expect(List.size()).toEqual(1);
});


it('adds a node at a specific position in the list', () => {
    const List = new LinkedList();

    List.add('foo');
    List.add('bar');
    List.add('baz');

    List.addAt('snooches', 2);

    expect(List.get(2).value).toEqual('snooches');
});


it('removes a node from a specific position in the list', () => {
    const List = new LinkedList();

    List.add('foo');
    List.add('bar');
    List.add('baz');

    List.removeAt(1);

    expect(List.get(1).value).toEqual('baz');
});
