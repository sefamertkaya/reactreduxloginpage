export const CONTROL_USER = 'CONTROL USER';

export function controlUser() {

     return {
         type : CONTROL_USER,
         payload : {

             control: true
         }
     }

}
