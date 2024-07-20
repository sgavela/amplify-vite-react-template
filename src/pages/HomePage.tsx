import { Heading, Flex, Text, Button, Image, Card, View } from '@aws-amplify/ui-react';


function HomePage() {
    return (
        <View 
            padding="20px" 
            style={{
                background: 'linear-gradient(to bottom right, lightblue, white)',
                minHeight: '100vh'
            }}
        >
            <Flex direction="column" alignItems="center">
                <Heading level={1}>Bienvenido a NetHousing</Heading>
                <Text fontSize="large" marginBottom="20px">
                    Un subtítulo con mucho gancho para convencer a cualquiera de que somos los mejores.
                </Text>
                
                <Image 
                    src="/assets/beautiful-house.jpg" 
                    alt="A beautiful house" 
                    width="100%" 
                    marginBottom="20px"
                />

                <Flex direction="row" gap="20px" marginBottom="20px">
                    <Card variation="outlined">
                        <Heading level={3}>Buscar una casa</Heading>
                        <Text>
                            Explora las casas que tus compañeros han querido compartir contigo.
                        </Text>
                        <Button
                            marginTop="10px" onClick={() => alert('No se puede, pero se podrá :)')}
                        >
                            Buscar una casa
                        </Button>
                    </Card>
                    
                    <Card variation="outlined">
                        <Heading level={3}>Compartir mi casa</Heading>
                        <Text>
                            Comparte tu casa para que tus compañeros se puedan alojar en ella.
                        </Text>
                        <Button
                            marginTop="10px" onClick={() => alert('No se puede, pero se podrá :)')}
                        >
                            Compartir una casa
                        </Button>
                    </Card>

                    <Card variation="outlined">
                        <Heading level={3}>Sobre nosotros</Heading>
                        <Text>
                            ¿Quiénes somos y cuál es nuestra misión? Descubre más sobre NetHousing.
                        </Text>
                        <Button
                            marginTop="10px" onClick={() => alert('No se puede, pero se podrá :)')}
                        >
                            Saber más sobre NetHousing
                        </Button>
                    </Card>
                </Flex>
            </Flex>
        </View>
    );
}

export default HomePage;
