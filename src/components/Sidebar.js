import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import logo from "../logo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const Divscroll = styled.div`
  overflow: scroll;
  height: 260px;
  width: 100%;
  overflow: auto;
  background-color: grey;
  color: white;
  scrollbar-base-color: grey;
  font-family: Times new roman;
  padding: 5px;
  transition: 0.5s;
`;

class SideNav extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [
        {
          hotel_name: "Octave Bengaluru",
          bookingId: "87654321",
          status: "new",
          booked_on: "2020-06-10 06:30:19",
          source: "ezee",
          check_in: "2020-06-11",
          check_out: "2020-06-12",
          channel: "Booking.com",
          total_price: 3000,
          total_tax: 300,
          total_payment: 3300,
          comment: ["I want tea bags ", " Need breakfast"],
          booked_by: {
            firstName: "Arun",
            lastName: "S",
            address: {
              country: "India",
            },
            email: "one@test.com",
            phone: "+91-9999999999",
          },
          rooms: [
            {
              name: "Deluxe",
              occupancy: {
                adult: 2,
                child: 0,
              },
              price: {
                sell_rate: 1000.0,
                tax: 100.0,
              },
            },
            {
              name: "Suite",
              occupancy: {
                adult: 2,
                child: 2,
              },
              price: {
                sell_rate: 2000.0,
                tax: 200.0,
              },
            },
          ],
        },
      ],
    };
  }
  useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  toggleSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  toggleSidebar1() {
    document.getElementById("mySidebar").style.width = "72px";
    document.getElementById("main").style.marginLeft = "85px";
  }

  render() {
    return (
      <div id="parent">
        <div
          id="mySidebar"
          class="sidebar"
          onMouseOver={this.toggleSidebar.bind()}
          onMouseOut={this.toggleSidebar1.bind()}
        >
          {/* <div id="mySidebar" class="sidebar" onmouseover="testIn()" onmouseout="testOut()"> */}
          <img src={logo} width={250} height={90} />
          <a href="./Sidebar">
            <span>
              <i class="material-icons">hotel</i>
              <span class="icon-text"></span>Live Booking
            </span>
          </a>
        </div>
        <div id="main">
          <div>
            {this.state.posts.map((dynamicData) => (
              <div>
                <h>Rates & Inventory</h>
                <p>Live Bookings</p>
                <div id="date">
                  <form className={this.useStyles.container} noValidate>
                    <TextField
                      id="date"
                      label="From Date"
                      type="date"
                      defaultValue="2020-05-24"
                      className={this.useStyles.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                      id="date"
                      label="To Date"
                      type="date"
                      defaultValue="2020-05-24"
                      className={this.useStyles.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </div>
                <div class="autoresize">
                  <table>
                    <Divscroll id="table">
                      <thead>
                        <tr>
                          <th rowspan="3">Hotel Name</th>
                          <th rowspan="3">Booking Id</th>
                          <th rowspan="3">Status</th>
                          <th rowspan="3">Booked On</th>
                          <th rowspan="3">Source</th>
                          <th rowspan="3">Check In</th>
                          <th rowspan="3">Check Out</th>
                          <th rowspan="3">Channel</th>
                          <th rowspan="3">Total price</th>
                          <th rowspan="3">Total tax</th>
                          <th rowspan="3">Total payment</th>
                          <th rowspan="3">Comment</th>
                          <th colspan="5">Booked by</th>
                          <th colspan="5">Rooms</th>
                        </tr>
                        <tr>
                          <th rowspan="2"> First name</th>
                          <th rowspan="2">Last name</th>
                          <th rowspan="1">Address</th>
                          <th rowspan="2">Email</th>
                          <th rowspan="2">Phone</th>
                          <th rowspan="2">Name</th>
                          <th colspan="2">Occupancy</th>

                          <th colspan="2">Price</th>
                        </tr>
                        <tr>
                          <th>Country</th>
                          <th>Adult</th>
                          <th>Child</th>
                          <th>Sell Rate</th>
                          <th>Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{dynamicData.hotel_name}</td>
                          <td>{dynamicData.bookingId}</td>
                          <td>{dynamicData.status}</td>
                          <td>{dynamicData.booked_on}</td>
                          <td>{dynamicData.source}</td>
                          <td>{dynamicData.check_in}</td>
                          <td>{dynamicData.check_out}</td>
                          <td>{dynamicData.channel}</td>
                          <td>{dynamicData.total_price}</td>
                          <td>{dynamicData.total_tax}</td>
                          <td>{dynamicData.total_payment}</td>
                          <td>{dynamicData.comment}</td>
                          <td>{dynamicData.booked_by.firstName}</td>
                          <td>{dynamicData.booked_by.lastName}</td>
                          <td>{dynamicData.booked_by.address.country}</td>
                          <td>{dynamicData.booked_by.email}</td>
                          <td>{dynamicData.booked_by.phone}</td>
                          <td>
                            {" "}
                            {dynamicData.rooms.map((dynamicData1) => (
                              <div>
                                {" "}
                                <td>{dynamicData1.name}</td>
                              </div>
                            ))}
                          </td>
                          <td>
                            {dynamicData.rooms.map((dynamicData1) => (
                              <div>
                                {" "}
                                <td>{dynamicData1.occupancy.adult}</td>
                              </div>
                            ))}
                          </td>
                          <td>
                            {" "}
                            {dynamicData.rooms.map((dynamicData1) => (
                              <div>
                                {" "}
                                <td>{dynamicData1.occupancy.child}</td>
                              </div>
                            ))}
                          </td>
                          <td>
                            {" "}
                            {dynamicData.rooms.map((dynamicData1) => (
                              <div>
                                {" "}
                                <td>{dynamicData1.price.sell_rate}</td>
                              </div>
                            ))}
                          </td>
                          <td>
                            {" "}
                            {dynamicData.rooms.map((dynamicData1) => (
                              <div>
                                {" "}
                                <td>{dynamicData1.price.tax}</td>{" "}
                              </div>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </Divscroll>

                  </table>

                </div><a id="previous" class="previous">
                  &laquo; Previous
                    </a>
                <a class="next">Next &raquo;</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
