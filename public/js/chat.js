const socket = io()

socket.on('countUpdated', (count) => {
    console.log('The count has been updated', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    socket.emit('increment')
})

document.querySelector('#reduction').addEventListener('click', () => {
    socket.emit('reduction')
})