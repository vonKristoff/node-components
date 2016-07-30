export default {
    
    nodes: [
        {
            name: 'root',
            children: [
                {
                    name: 'thing-1',
                    children: [] 
                },
                {
                    name: 'thing-2',
                    children: [] 
                },
                {
                    name: 'thing-3',
                    children: [
                        {
                            name: 'thing-4',
                            children: [] 
                        }
                    ]
                }
            ]
        },
        {
            name: 'three',
            children: []
        }
    ]
}