import { Header, Icon } from 'semantic-ui-react'

export default function HeaderComponent() {

  return (
    <>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>BuyNothing</Header.Content>
      </Header>
    </>
  )
}
