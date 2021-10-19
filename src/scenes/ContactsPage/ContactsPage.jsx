import React from 'react';
import './ContactsPage.scss';
import SectionTitle from "../MainPage/components/SectionTitle/SectionTitle";
import Contacts from "../MainPage/components/Contacts/Contacts";
const ContactsPage = () => {
    return (<>
      <SectionTitle title='PR Credit - автоломбард в Києві' desc=''/>

      <Contacts />
    </>);
};
export default ContactsPage;
