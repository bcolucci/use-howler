import useHowler from '.'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    const props = useHowler({
      src: ['./test.wav']
    })
    console.log(props)
  })
})
