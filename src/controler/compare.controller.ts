import { Request, Response } from "express";

type Person = {
    name: string,
    dob: string 
}

const ageComparation = (req: Request, res: Response) => {
   try {
    
   const firstPerson: Person = req.body.firstPerson
   const secondPerson: Person = req.body.secondPerson
  
   const firstDob: Date = new Date(firstPerson.dob)
   const secondDob: Date = new Date(secondPerson.dob)

   let message = '';

   if (firstDob > secondDob) message += `${secondPerson.name} is older then ${firstPerson.name}`
   if (firstDob < secondDob) message += `${firstPerson.name} is older then ${secondPerson.name}`
   if (firstDob == secondDob) message += `${firstPerson.name} is same age as ${secondPerson.name}`
   
   return res.status(200).json({message})

   } catch (error) {
     return res.status(500).json(error)
   }
}

export {ageComparation}