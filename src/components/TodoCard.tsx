import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource';
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
        <Card backgroundColor={tokens.colors.primary[20]}>
            <Flex direction="row" alignItems="flex-start">
            <Image
                alt="Road to milford sound"
                src="/road-to-milford-new-zealand-800w.jpg"
                width="33%"
            />
            <Flex
                direction="column"
                alignItems="flex-start"
                gap={tokens.space.xs}
            >
                <Flex>
                <Badge size="small" variation="info">
                    Plus
                </Badge>
                <Badge size="small" variation="success">
                    Verified
                </Badge>
                </Flex>

                <Heading level={5}>
                {todo.id}
                </Heading>

                <Text as="span">
                {todo.type}
                </Text>
                <Button variation="primary">Book it</Button>
            </Flex>
            </Flex>
        </Card>
        </View>
    );
};
  
export default TodoCard;


