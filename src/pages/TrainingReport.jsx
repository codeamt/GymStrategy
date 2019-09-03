import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

import {
  Person,
} from 'blockstack';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default class TrainingReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gym_instances: [],
    }
  }
  render() {
    return (
      <div id="home" style={{width: "100vw !important", height: "100vh !important", top: "20em !important"}}>
      <PDFViewer>
      <Document style={{width: "100vw", height: "100vh", top: "0em !important"}}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
      </PDFViewer>
      </div>
    )
  }
}