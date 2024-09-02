import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { login } from '@/service/auth';

export default function LoginScreen() {
  const router = useRouter();
  const [userForm, setUserForm] = useState({
    username: '',
    password: ''
  });
  const [errorUsername, setErrorUsername] =useState("");
  const [errorPassword, setErrorPassword] =useState("");

  const loginUser = async () => {
    let allValid = true;
    if (userForm.username?.length < 5) {
      setErrorUsername("Username invalid");
      allValid = false;
    } else {
      setErrorUsername("");
    }
    if (userForm.password?.length < 5) {
      setErrorPassword("Password invalid");
      allValid = false;
    } else {
      setErrorPassword("");
    }
    if (!allValid) {
      return;
    }
    // puedo llamar al backend a procesar el login
    const rtaLogin = await login({
      email: userForm.username,
      password: userForm.password
    });
    if (rtaLogin) {
      router.navigate('/');
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logoCepit.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Usuario</ThemedText>
          <TextInput 
            style={styles.inputUsername}
            inputMode='email'
            value={userForm.username}
            onChangeText={(text) =>setUserForm({
              ...userForm,
              username: text, 
            })}
          />  
          {errorUsername && (
            <ThemedText type='errorMessage'>{errorUsername}</ThemedText>
          )}
          <ThemedText type='defaultSemiBold'>Password</ThemedText>
          <TextInput 
            style={styles.inputUsername}
            inputMode='text'
            value={userForm.password}
            secureTextEntry={true}
            onChangeText={(text) =>setUserForm({
              ...userForm,
              password: text, 
            })}
          />  
          {errorPassword && (
             <ThemedText type='errorMessage'>{errorPassword}</ThemedText>
          )}
          <Button title={'Login'} onPress={loginUser} />
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  inputUsername: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    backgroundColor: '#FFFFFF',
    height: 40,
    borderRadius: 3,
  }
});
