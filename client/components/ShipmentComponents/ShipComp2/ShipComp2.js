import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryDropDown from '../../dropDownPickers/primaryDropDown'
import { useSelector } from 'react-redux'
import { selectloadCategory, selectLoadType } from '../../../slices/slice'
import ShipComp1 from '../ShipComp1/ShipComp1'
//CUSTOMS CLEARANCE

const load_types = [
  // loadCategory 1 requires no extra dropdown
  // loadCategory 2 requires extra drop down for Charged Per
  // in drop-down menu, i can just set item.value depending on these two categories aint it?

  { label: "Sea FCL", value: "Sea FCL", CargoCategory:"1", loadCategory:"1" },
  { label: "Sea LCL", value: "Sea LCL", CargoCategory:"2",loadCategory:"1"  },
  { label: "Air Kg", value: "Air Kg", CargoCategory:"2", loadCategory:"1"   },
  { label: "Land Drayage", value: "Land Drayage", CargoCategory:"3", loadCategory:"2"  },
  { label: "Land FTL", value: "Land FTL", CargoCategory:"2", loadCategory:"2"  },
  { label: "Land LTL", value: "Land LTL", CargoCategory:"2", loadCategory:"2"  },
  { label: "Break Bulk", value: "Break Bulk", CargoCategory:"2", loadCategory:"1"  },
  { label: "RoRo", value: "RoRo", CargoCategory:"2", loadCategory:"1" },
  { label: "Live Stock", value: "Live Stock", CargoCategory:"2", loadCategory:"1"  },

]

const ShipComp2 = () => {
  const load_type = useSelector(selectLoadType)

  return (
    <View>
      <PrimaryDropDown slice="Load Type" title="Load Type" propItems={load_types}/>
    </View>
  )
}

export default ShipComp2

const styles = StyleSheet.create({})