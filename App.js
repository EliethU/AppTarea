import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign'; 

const AppTareas = () => {

  const [tareas, setTareas] = useState([]);

  const [tarea, setTarea] = useState('');

  const agregarTarea = () => {
    if (tarea.trim()) {
      const tareaNueva = {
        id: uuid.v4(),
        nuevaTarea: tarea,
        completada: false,
      };
      setTareas([...tareas, tareaNueva]);
      setTarea(''); 
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Aplicación de Tareas</Text>

      <View style={styles.formulario}>
        <TextInput 
          style={styles.input} 
          placeholder="Ingrese una nueva tarea" 
          value={tarea} 
          onChangeText={(text) => setTarea(text)} 
        />
        <TouchableHighlight style={styles.boton} onPress={agregarTarea}>
          <Text style={styles.botonTexto}>Agregar tarea</Text>
        </TouchableHighlight>
      </View>

      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarea}>
            <Text>{item.nuevaTarea}</Text>
            <AntDesign 
              name="close" 
              style={styles.iconoEliminar} 
              onPress={() => eliminarTarea(item.id)} 
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  formulario: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#66035e',
    padding: 10,
    width: '70%',
    marginRight: 10,
  },
  boton: {
    backgroundColor: '#66035e',
    padding: 10,
    justifyContent: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#c486bf',
    borderBottomWidth: 1,
    borderColor: '#66035e',
    width: '100%',
  },
  iconoEliminar: {
    fontSize: 24,
    color: 'red',
  },
});

export default AppTareas;