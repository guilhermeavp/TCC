"use client"
import { API } from "@/app/api/api";
import axios from 'axios';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function Login() {

    async function login(i:FormEvent<HTMLFormElement>) {
        i.preventDefault();
        const formData = new FormData(i.currentTarget)

        const data = {
          username: formData.get('username'),
          password: formData.get('password')
        }

        console.log('JSON.stringify(data)',JSON.stringify(data))
        console.log('data',data)
        const teste = await API('/token','post',data)
/*         axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('/token', {...data}, {
          baseURL:'http://192.168.0.102:10800',
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }) */

        console.log('teste',teste)
    }

  return (
    <Dialog>
      <DialogTrigger>Login</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make your login</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <form className="flex-col space-y-2" onSubmit={login}>
            <input type="sting" placeholder="Username" name='username' className="input input-primary w-full"></input>
            <input type="password" placeholder="Password" name='password' className="input input-primary w-full"></input>
            <div className=" flex justify-between">
              <button type="submit" className="btn btn-primary w-1/4"> Login</button>
              <button className="btn btn-secondary w-1/4"> Create user</button>
            </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
