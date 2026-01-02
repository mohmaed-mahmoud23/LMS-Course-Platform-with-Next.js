import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GithubIcon } from 'lucide-react'
import React from 'react'

const Loginpage = () => {
  return(
   <Card >
    
    <CardHeader>
      <CardTitle className='text-xl'>welocem back !</CardTitle>
      <CardDescription>Login  wiht youe GitHup  Email Account  </CardDescription>
    </CardHeader>
    <CardContent>
      <Button className='w-full 'variant={"outline"}>
        <GithubIcon className='size-5'/>
        sign in with GitHub
      </Button>
    </CardContent>
   </Card>
  )
}

export default Loginpage