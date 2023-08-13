# CLI-aplikacja

## Przykład działania

- https://ibb.co/jJZbxXy - node index.js --action list
- https://ibb.co/Dg5Wsp7 - node index.js --action get --id <contactId>
- https://ibb.co/P65Pz7X - node index.js --action add -n <name> -e <email> -p <phone>
- https://ibb.co/G71D5LV - node index.js --action remove --id <contactId>

Prosta aplikacja wiersza poleceń umożliwiająca zarządzanie listą kontaktów.

## Instrukcje

1. **Instalacja zależności**

   Przed rozpoczęciem korzystania z aplikacji, upewnij się, że masz zainstalowanego Node.js. Następnie wykonaj następujące polecenie w katalogu projektu, aby zainstalować wymagane zależności:

   ```
   npm install
   ```

2. **Uruchamianie Aplikacji**

Po zainstalowaniu zależności, możesz uruchomić aplikację za pomocą następujących komend:

- Wyświetlanie listy kontaktów:

  ```
  node index.js --action list
  ```

- Pobieranie kontaktu po ID:

  ```
  node index.js --action get --id <contactId>
  ```

- Dodawanie nowego kontaktu:

  ```
  node index.js --action add -n <name> -e <email> -p <phone>
  ```

- Usuwanie kontaktu po ID:
  ```
  node index.js --action remove --id <contactId>
  ```
