public class Operadores {
    public static void main(String args[]) {
        int edad = 18;
        boolean nacionalidadMexicana = false;

        // AND
        if (edad >= 18 && nacionalidadMexicana) {
            System.out.println("Puede entregasrse la INE");
        } else {
            System.out.println("No se podrá entregar la INE");
        }

        // OR
        if (edad >= 18 || nacionalidadMexicana) {
            System.out.println("Puede pasar al antro");
        } else {
            System.out.println("No puede pasar al antro");
        }

        // NOT
        if (!(edad >= 18 || nacionalidadMexicana)) {
            System.out.println("No puede pasar al antro");
        } else {
            System.out.println("Puede pasar al antro");
        }

        // Las Flores Amrillas
        boolean recibiFloresAmarillas = false;

        if (recibiFloresAmarillas) {
            System.out.println("Ya es Primavera");
            System.out.println("Mi crush me hiper ama");
            System.out.println(" me siento feliz");
            System.out.println("Le daré su ramo de hotwheels");
        } else {

            System.out.println("Vamos a buscar otro crush");
            System.out.println("No me ama");
            System.out.println("No me siento feliz");
            System.out.println("No le daré su ramo de hotwheels");
        }
    }

}
