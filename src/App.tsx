import React from 'react';
import './App.css';

import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/input';
import { Container } from './components/container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

function App() {
  const personName = {
    firstName: 'Nidheesh',
    secondName: 'Davis'
  }

  const nameList = [
    {
      firstName: 'Nidheesh',
      secondName: 'Davis'
    },
    {
      firstName: 'Vinu',
      secondName: 'Varghese'
    },
    {
      firstName: 'Sajin',
      secondName: 'Joseph'
    }
  ]

  return (
    <div className="App">
      <Greet name = "Nidheesh" messageCount={10} isLoggedin={true}/>{/* string, number, boolean */}
      <Person name={personName}/>{/* object */}
      <PersonList names={nameList}/>{/* array of object */}
      <Status status='success'/>{/* accept predefined values only (union of)*/}
      <Heading>passing children props</Heading>{/* passing children */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicapro</Heading>
      </Oscar>{/* passing react component */}
      <Greet name = "Nidheesh" isLoggedin={true}/>{/* optinal type (messageCount)*/}
      <Button handleClick={(event,id) => {
        console.log('Button Clicked', event, id)
      }}></Button>{/* passing event */}
      <Input value="" handleChange={(event) => console.log(event)} />{/* passing event, other method */}
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>{/* passing styles */}
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <Counter message='The count value is'/>{/* class component */}
      <Private isLoggedIn={true} component={Profile}/>{/* class component - passing components*/}
      <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item)=>console.log(item)}/>{/* Generic Props: any type, number, string, object etc */}
      <List items={[1, 2, 3, 4]} onClick={(item)=>console.log(item)}/>{/* Generic Props: any type, number, string, object etc */}
      <RandomNumber value={10} isPositive={true}/>{/* Restricting Props */}
      <Toast position='ceenter-bottom'/>{/*Template Literals and Exclude - use if there are a lot of options availabe. Also possible to combain different types too*/}
      <CustomButton variant='primary'>{/* Wrapping HTML Elements */}
        Primary Button
      </CustomButton>
      <Text size='lg' as='h1'>Heading</Text>{/* Polymorphic Components */}
      <Text size='md' as='p'>Paragraph</Text>{/* Polymorphic Components */}
      <Text size='sm' as='label' color='secondary' htmlFor='someId'>Label</Text>{/* Polymorphic Components */}
    </div>
  );
}

export default App;
