import { type Schema } from '../../amplify/data/resource';
import { generateClient } from "aws-amplify/data";
import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

function deleteTodo(todo: Schema["Todo"]["type"]) {
    client.models.Todo.delete({ id: todo.id });
}

interface TodoCardProps {
    todo: Schema["Todo"]["type"];
}
  
const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
    const { tokens } = useTheme();
    return (
        <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
        >
            <Card
                backgroundColor={tokens.colors.primary[20]}
                position="relative" 
                padding={tokens.space.medium}
            >
                <Flex direction="row" alignItems="flex-start">
                    <Image
                        alt="Road to milford sound"
                        src="../assets/house1.jpg"
                        width="20%"
                    />
                    <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                        flex="1"
                    >
                        <Heading level={3}>
                            {todo.type}
                        </Heading>
                        <Heading level={4}>
                            {todo.location}
                        </Heading>
                        <Heading level={5}>
                            {todo.description}
                        </Heading>
                    </Flex>
                </Flex>
                <Button
                    variation="primary"
                    colorTheme="error"
                    onClick={() => deleteTodo(todo)}
                    position="absolute"
                    bottom={tokens.space.medium} 
                    right={tokens.space.medium}
                >
                    Borrar casa
                </Button>
            </Card>
        </View>
    );
};
  
export default TodoCard;



