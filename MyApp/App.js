import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView
} from "react-native";
import { Vibration } from "react-native";

class StopWatch extends Component {
  state = {
    timer: null,
    worktimer: null,
    sec: "00",
    Min: "00",
    Hour: "00",
    WorkTotalSec: "00",
    WorkTotalMin: "00",
    WorkTotalHour: "00",
    BreakTotalSec: "00",
    BreakTotalMin: "00",
    BreakTotalHour: "00",
    onBreak: false,
    typearray: [],
    timearray: []
  };

  constructor(props) {
    super(props);

    this.ButtonStart = this.ButtonStart.bind(this);
    this.ButtonStop = this.ButtonStop.bind(this);
    this.ButtonClear = this.ButtonClear.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    this.start(), this.startWork();
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    clearInterval(this.state.worktimer);
    clearInterval(this.state.breakTimer);
  }

  start() {
    var self = this;
    let timer = setInterval(() => {
      var seconds = (Number(this.state.sec) + 1).toString(),
        min = this.state.Min,
        hr = this.state.Hour;
      if (Number(this.state.sec) == 59) {
        min = (Number(this.state.Min) + 1).toString();
        seconds = "00";
      }
      if (Number(this.state.Min) == 59) {
        hr = (Number(this.state.Hour) + 1).toString();
        min = "00";
      }
      if (seconds % 30 == 0 && this.state.onBreak == false) {
        this.StartBreakTimer();
        this.state.onBreak = true;
        this.setState({
          typearray: this.state.typearray.concat(this.state.onBreak.toString())
        });
        Vibration.vibrate();
        Alert.alert("Time for a Break.");
        this.StopWorkTimer();
      }
      if (seconds % 20 == 0 && this.state.onBreak == true) {
        this.StopBreakTimer();
        this.state.onBreak = false;
        this.setState({
          typearray: this.state.typearray.concat(this.state.onBreak.toString())
        });
        Vibration.vibrate();
        Alert.alert("Break is now over. Start Studying again.");
        this.StartWorkTimer();
      }

      self.setState({
        Hour: hr.length == 1 ? "0" + hr : hr,
        Min: min.length == 1 ? "0" + min : min,
        sec: seconds.length == 1 ? "0" + seconds : seconds
      });
    }, 1000);
    this.setState({ timer });
  }
  startWork() {
    var self = this;
    let worktimer = setInterval(() => {
      var seconds = (Number(this.state.WorkTotalSec) + 1).toString(),
        min = this.state.WorkTotalMin,
        hr = this.state.WorkTotalHour;
      if (Number(this.state.WorkTotalSec) == 59) {
        min = (Number(this.state.WorkTotalMin) + 1).toString();
        seconds = "00";
      }
      if (Number(this.state.WorkTotalMin) == 59) {
        hr = (Number(this.state.WorkTotalHour) + 1).toString();
        min = "00";
      }
      self.setState({
        WorkTotalHour: hr.length == 1 ? "0" + hr : hr,
        WorkTotalMin: min.length == 1 ? "0" + min : min,
        WorkTotalSec: seconds.length == 1 ? "0" + seconds : seconds
      });
    }, 1001);
    this.setState({ worktimer });
  }
  startBreak() {
    var self = this;
    let breakTimer = setInterval(() => {
      var seconds = (Number(this.state.BreakTotalSec) + 1).toString(),
        min = this.state.BreakTotalMin,
        hr = this.state.BreakTotalHour;
      if (Number(this.state.BreakTotalSec) == 59) {
        min = (Number(this.state.BreakTotalMin) + 1).toString();
        seconds = "00";
      }
      if (Number(this.state.BreakTotalMin) == 59) {
        hr = (Number(this.state.BreakTotalHour) + 1).toString();
        min = "00";
      }
      self.setState({
        BreakTotalHour: hr.length == 1 ? "0" + hr : hr,
        BreakTotalMin: min.length == 1 ? "0" + min : min,
        BreakTotalSec: seconds.length == 1 ? "0" + seconds : seconds
      });
    }, 1000);
    this.setState({ breakTimer });
  }

  ButtonStart() {
    this.start();
    this.startWork();
  }

  ButtonStop() {
    clearInterval(this.state.timer);
    clearInterval(this.state.worktimer);
    clearInterval(this.state.breakTimer);
  }
  StartWorkTimer() {
    this.startWork();
  }
  StopWorkTimer() {
    clearInterval(this.state.worktimer);
  }
  StartBreakTimer() {
    this.startBreak();
  }
  StopBreakTimer() {
    clearInterval(this.state.breakTimer);
  }

  ButtonClear() {
    this.setState({
      timer: null,
      worktimer: null,
      sec: "00",
      Min: "00",
      Hour: "00",
      WorkTotalSec: "00",
      WorkTotalMin: "00",
      WorkTotalHour: "00",
      BreakTotalSec: "00",
      BreakTotalMin: "00",
      BreakTotalHour: "00",
      onBreak: false
    });
  }

  render() {
    var Hour = this.state.Hour;
    var Min = this.state.Min;
    var Sec = this.state.sec;
    var TotalTime = Hour + ":" + Min + ":" + Sec;
    var type = this.state.onBreak;
    return (
      <View>
        <Text styles={styles.counter}>
          Total Time: {TotalTime} {"\n"}
          Work Time Total: {this.state.WorkTotalHour}:{this.state.WorkTotalMin}:
          {this.state.WorkTotalSec}
          {"\n"}
          Break Time Total: {this.state.BreakTotalHour}:
          {this.state.BreakTotalMin}:{this.state.BreakTotalSec}
        </Text>
        <Button title="Start" onPress={this.ButtonStart} />
        <Button title="Stop" onPress={this.ButtonStop} />
        <Button title="Clear" onPress={this.ButtonClear} />

        {this.state.typearray.map((item, key) => (
          <Text key={key} style={styles.TextStyle}>
            {item} {TotalTime}
          </Text>
        ))}
        <View style={styles.laps}>
          <Text style={styles.laps}>{type == false ? "Work" : "Break"} </Text>
          <Text style={styles.laps}>{TotalTime} </Text>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StopWatch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  counter: {
    fontSize: 200,
    textAlign: "center",
    height: 60,
    margin: 10
  },
  laps: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scrollView: {
    alignSelf: "stretch"
  }
});
