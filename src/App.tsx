import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import TodoCard from './components/TodoCard';
import NetHousingMenu from './components/Menu';
import { Heading, Text } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ type: window.prompt("Todo content") });
  }
 
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
      <main>
        <NetHousingMenu></NetHousingMenu>
        <Heading width='30vw' level={3}>Casas de {user?.signInDetails?.loginId}</Heading>
        <button onClick={createTodo}>+ new</button>
        <div>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        <div>
          🥳 App successfully hosted. Try creating a new todo.
          <br />
          <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
            Review next step of this tutorial.
          </a>
        </div>
        <button onClick={signOut}>Sign out</button>
      </main>  
    )}
    </Authenticator>
  );
}

export default App;
