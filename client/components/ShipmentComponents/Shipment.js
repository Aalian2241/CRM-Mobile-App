import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectloadCategory, selectLoadType, selectServiceType } from '../../slices/slice'
import tw from "twrnc"
import ShipComp1 from './ShipComp1/ShipComp1'
import ShipComp2 from './ShipComp2/ShipComp2'
import PrimaryDropDown from '../dropDownPickers/primaryDropDown'

const chargedPer= [
  {label:"+100",value:"+100"},
  {label:"+1000",value:"+1000"},
  {label:"+250",value:"250"},
  {label:"+300",value:"+300"},
  {label:"+45",value:"+45"},
  
  {label:"+500",value:"+500"},
  {label:"-45",value:"-45"},
  {label:"20FR",value:"20FR"},
  {label:"20FT",value:"20FT"},
  {label:"20GP",value:"20GP"},
  
  {label:"20HC",value:"20HC"},
  {label:"20HD",value:"20HD"},
  {label:"20OT",value:"20OT"},
  {label:"20RF",value:"20RF"},
  {label:"20T3",value:"20T3"},
  
  {label:"20T5",value:"20T5"},
  {label:"20TK",value:"20TK"},
  {label:"30FR",value:"30FR"},
  {label:"40FR",value:"40FR"},
  {label:"40FT",value:"40FT"},
  
  {label:"40GP",value:"40GP"},
  {label:"40HC",value:"40HC"},
  {label:"40HD",value:"40HD"},
  {label:"40OT",value:"40OT"},
  {label:"40RF",value:"40RF"},
  
  {label:"40TK",value:"40TK"},
  {label:"45FT",value:"45FT"},
  {label:"45HC",value:"45HC"},
  {label:"53' DRY VAN",value:"53' DRY VAN"},
  {label:"AWB",value:"AWB"},

  {label:"DOUBLE DROP DECK TRAILER",value:"DOUBLE DROP DECK TRAILER"},
  {label:"DROP DECK TRAILER",value:"DROP DECK TRAILER"},
  {label:"FLAT BED TRAILER",value:"FLAT BED TRAILER"},
  {label:"FLAT FEE",value:"FLAT FEE"},
  {label:"FLATBED TRUCK",value:"FLATBED TRUCK"},

  {label:"Fuel",value:"Fuel"},
  {label:"LOW BOY TRAILER",value:"LOW BOY TRAILER"},
  {label:"LUMP SUM",value:"LUMP SUM"},
  {label:"MIN",value:"MIN"},
  {label:"PER CBM",value:"PER CBM"},
  
  {label:"Per BL",value:"Per BL"},
  {label:"Per Container",value:"Per Container"},
  {label:"PER DOCUMENT",value:"PER DOCUMENT"},
  {label:"Per Invoice 5%",value:"Per Invoice 5%"},
  {label:"Per Kg",value:"Per Kg"},
  
  {label:"PER MT",value:"PER MT"},
  {label:"PER PIECE",value:"PER PIECE"},
  {label:"PER SET",value:"PER SET"},
  {label:"PER SHIPMENT",value:"PER SHIPMENT"},
  {label:"PER UN #",value:"PER UN #"},
  
  {label:"PER UNIT",value:"PER UNIT"},
  {label:"PER VEHICLE OR UNIT",value:"PER VEHICLE OR UNIT"},
  {label:"REEFER TRUCK",value:"REEFER TRUCK"},
  {label:"Security",value:"Security"},
  {label:"W/M",value:"W/M"},
  
]

const service_types = [
  { label: "Frieght Forwarding", value: "Frieght Forwarding" },
  { label: "Customs Clearance", value: "Customs Clearance" },
]

const Shipment = () => {
  const service = useSelector(selectServiceType);
  
  const load_category = useSelector(selectloadCategory);
  console.log(load_category)
  return (
    <View>
      <View style={tw`flex-row `}>
        <PrimaryDropDown s slice="Service Type" propItems={service_types} title="Service Type"/>
        {service === "Customs Clearance" ? <ShipComp2 /> : <ShipComp1/>}
      </View>

      <View style={tw`flex-row pt-1`}>
        {load_category === "2" ? <PrimaryDropDown slice="Charged Per" title="Charged Per" propItems={chargedPer} /> : null}
      </View>
    
    </View>
      

  )
}

export default Shipment

const styles = StyleSheet.create({})