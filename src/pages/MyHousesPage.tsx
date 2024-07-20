import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import TodoCard from '../components/TodoCard';
import { Heading, Button } from '@aws-amplify/ui-react';

import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
    Routes,
    Route,
    useNavigate
} from 'react-router-dom';

const client = generateClient<Schema>();

function MyHousesPage() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  let navigate = useNavigate(); 
  const goToNewHousePage = () =>{ 
    let path = "/new-house"; 
    navigate(path);
  }


  return (
    <Authenticator>
      {({ signOut, user }) => (
            <main>
                <Heading width='30vw' level={3}>Casas de {user?.signInDetails?.loginId}</Heading>
                <Button
                    variation="primary"
                    isFullWidth={true}
                    onClick={goToNewHousePage}
                >
                    + Añadir casa
                </Button>
                <div>
                {todos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
                </div>
                <button onClick={signOut}>Sign out</button>
            </main>
        )}
    </Authenticator>
  );
}

export default MyHousesPage;