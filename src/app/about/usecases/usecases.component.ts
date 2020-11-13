import { Component, OnInit } from '@angular/core';
import { UseCase } from '../usecase/usecase.model';

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.css']
})
export class UsecasesComponent implements OnInit {
  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een bestaande gebruiker in.',
      scenario: [
        'Gebruiker vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent geregistreerd',
      postcondition: 'De actor is ingelogd'
    },
    {
      id: 'UC-02',
      name: 'Registreren',
      description: 'Hiermee registreerd een gebruiker een account.',
      scenario: [
        'Gebruiker klikt op Registreren.',
        'De gebruiker vult zijn username, email en wachtwoord in en klikt op de registreer knop',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent nog niet geregistreerd',
      postcondition: 'De actor is geregistreerd en ingelogd'
    },
    {
      id: 'UC-03',
      name: 'Hero list',
      description: 'Hiermee krijgt de gebruiker een lijst van zijn Heroes.',
      scenario: [
        'De gebruiker klikt op knop Heroes uit de navigatie balk.',
        'Indien de gebruiker ingelogd is redirect de applicatie naar de Herolist.',
        'De heroes van het het ingelogde account worden geladen.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent ingelogd',
      postcondition: 'De actor ziet een lijst met zijn of haar Heroes'
    },
    {
      id: 'UC-04',
      name: 'Hero aanmaken',
      description: 'Hiermee creëert de gebruiker een nieuwe Hero.',
      scenario: [
        'De gebruiker klikt op knop Create New Hero.',
        'De gebruiker vult de naam van Hero in en selecteerd een gender',
        'De gebruiker klikt op de Create Hero knop.',
        'Indien gegevens correct zijn dan redirect de applicatie naar de Herolist.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent ingelogd',
      postcondition: 'De actor heeft een Hero aangemaakt'
    },
    {
      id: 'UC-05',
      name: 'Hero aanpassen',
      description: 'Hiermee past de gebruiker een bestaande Hero aan.',
      scenario: [
        'De gebruiker klikt op knop Edit Hero.',
        'De gebruiker kan de naam en gender van de Hero aanpassen.',
        'De gebruiker klikt op de Save Hero knop.',
        'Indien gegevens correct zijn dan redirect de applicatie naar de Herolist.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent ingelogd en op de heroList pagina',
      postcondition: 'De actor heeft de Hero aangepast'
    },
    {
      id: 'UC-06',
      name: 'Hero verwijderen',
      description: 'Hiermee verwijderd de gebruiker een bestaande Hero.',
      scenario: [
        'De gebruiker klikt op knop Delete Hero.',
        'De gebruiker krijgt een popup te zien met de naam van de Hero',
        'De gebruiker klikt in de popup op de Delete [Hero Name] knop.',
        'Indien de Hero correct verwijderd is dan redirect de applicatie naar de Herolist.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent ingelogd en op de heroList pagina',
      postcondition: 'De actor heeft een Hero verwijderd'
    },
    {
      id: 'UC-07',
      name: 'Hero op quest sturen',
      description: 'Hiermee stuurd de gebruiker een Hero op een quest',
      scenario: [
        'De gebruiker klikt op een Hero',
        'De gebruiker klikt op de Send on Quest knop',
        'De gebruiker selecteer welke quest hij of zij wil doen',
        'De gebruiker heeft de mogelijkheid om gold in te leggen om de successkans te vergroten.',
        'De gebruiker krijgt een te zien of de quest successvol was of niet.',
        'De gebruiker ziet meteen wat hij of zij daarmee gekregen heeft aan gold en exp punten.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Je bent ingelogd en op de heroList pagina',
      postcondition: 'De actor heeft een Hero op een quest gestuurd.'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
