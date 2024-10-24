import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type SettingsItemProps = {
    id:number,
    icon:JSX.Element,
    name:string,
    description:string
}
const SettingsItem = ({item}:{item:SettingsItemProps}) => {
  return (
    <View className='flex flex-row items-center gap-7 w-full ml-1 '>
      {
        item.icon
      }
      <View className='flex flex-col items-start justify-center  '>
          <Text className='text-white text-[17px]'>{item.name}</Text>
          <Text className='text-slate-400 '>{item.description}</Text>
      </View>
    </View>
  )
}

export default SettingsItem
