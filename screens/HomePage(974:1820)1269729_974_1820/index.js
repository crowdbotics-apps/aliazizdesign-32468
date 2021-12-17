import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d878/b275/ceeb4ba2a29c5518f7d5a1d768d7204d"
        }}
        style={styles.ImageBackground_974_1821}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3e/5bc7/3dfc026291b2949617dddc58a43b1dc3"
        }}
        style={styles.ImageBackground_974_1822}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac4d/0a98/f5be11278a65f85bfc8488b4118726f6"
        }}
        style={styles.ImageBackground_974_1823}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1189/170f/76f8961fe718cb77e8b321f7b475f665"
        }}
        style={styles.ImageBackground_974_1824}
      />
      <View style={styles.View_974_1825}>
        <View style={styles.View_974_1826} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/349c/39f8/dea54efe5054d8eeed6f58a22872c136"
          }}
          style={styles.ImageBackground_974_1827}
        />
        <View style={styles.View_974_1836}>
          <View style={styles.View_974_1837}>
            <Text style={styles.Text_974_1837}>about</Text>
          </View>
          <View style={styles.View_974_1838}>
            <Text style={styles.Text_974_1838}>work</Text>
          </View>
          <View style={styles.View_974_1839}>
            <Text style={styles.Text_974_1839}>process</Text>
          </View>
          <View style={styles.View_974_1840}>
            <Text style={styles.Text_974_1840}>uncut &amp; raw</Text>
          </View>
        </View>
        <View style={styles.View_974_1841}>
          <Text style={styles.Text_974_1841}>hello@aliaziz.design</Text>
        </View>
      </View>
      <View style={styles.View_974_1844}>
        <Text style={styles.Text_974_1844}>a creative problem solver</Text>
      </View>
      <View style={styles.View_974_1846}>
        <Text style={styles.Text_974_1846}>👋 Hi, I&#39;m ali</Text>
      </View>
      <View style={styles.View_974_1847}>
        <View style={styles.View_974_1848} />
        <View style={styles.View_974_1849}>
          <Text style={styles.Text_974_1849}>Discuss Project</Text>
        </View>
      </View>
      <View style={styles.View_974_1850} />
      <View style={styles.View_1052_1496}>
        <View style={styles.View_1052_1497}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18c3/5cd0/be944fed7ab3de0afbb95a2a6423a518"
            }}
            style={styles.ImageBackground_1052_1498}
          />
          <View style={styles.View_1052_1499} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c99/1ecd/2b6c417a9b52375b627210e2f2ef0751"
            }}
            style={styles.ImageBackground_1058_1561}
          />
        </View>
        <View style={styles.View_1052_1500} />
        <View style={styles.View_1058_1562}>
          <View style={styles.View_1058_1574}>
            <View style={styles.View_1058_1563}>
              <Text style={styles.Text_1058_1563}>Cliff McBride</Text>
            </View>
            <View style={styles.View_1058_1564}>
              <Text style={styles.Text_1058_1564}>
                Vice presedent at Betts Recruiting
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bf8/11af/4f2600780cd898fbdad17f944db4c6d6"
            }}
            style={styles.ImageBackground_1058_1565}
          />
        </View>
        <View style={styles.View_1058_1566}>
          <View style={styles.View_1058_1567}>
            <Text style={styles.Text_1058_1567}>Dianne Russell</Text>
          </View>
          <View style={styles.View_1058_1568}>
            <Text style={styles.Text_1058_1568}>
              Vice presedent at Betts Recruiting
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d820/be8f/fc19d0d175a27cf3cc6c48a6dc72fba8"
            }}
            style={styles.ImageBackground_1058_1569}
          />
        </View>
        <View style={styles.View_1058_1631}>
          <View style={styles.View_1058_1632}>
            <Text style={styles.Text_1058_1632}>Dianne Russell</Text>
          </View>
          <View style={styles.View_1058_1633}>
            <Text style={styles.Text_1058_1633}>
              Vice presedent at Betts Recruiting
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d820/be8f/fc19d0d175a27cf3cc6c48a6dc72fba8"
            }}
            style={styles.ImageBackground_1058_1634}
          />
        </View>
        <View style={styles.View_1052_1501}>
          <Text style={styles.Text_1052_1501}>endorsements</Text>
        </View>
        <View style={styles.View_1052_1502}>
          <Text style={styles.Text_1052_1502}>
            Endorsements from people I have worked closely with, including
            Product Managers, fellow Designers, Engineers and colleagues from
            other disciplines.{" "}
          </Text>
        </View>
        <View style={styles.View_1052_1503}>
          <Text style={styles.Text_1052_1503}>
            &quot;Upon joining the team, Ali hit the ground running full steam
            ahead. He has successfully embedded himself within the various
            disciplines across the division. In each instance, he has shown
            himself to be an immensely talented designer, problem solver and
            deeply committed contributor to the team at large. In addition to
            the impressive results on each project, he has contributed greatly
            to the larger design group. He is continuously willing to share his
            insights towards new creative or prototyping platforms and has
            become a go-to resource for his team.{" "}
          </Text>
        </View>
        <View style={styles.View_1052_1520}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d4/940b/0e6183b3d18a5e7050396260c76a64f0"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1860}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/954e/c105/85b655921eee0a8164680a501fe0a759"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac8/feff/97aecf41d43b97dcc025207ac55bcf27"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33ce/c1a3/3394f61d31284e00410882da67cc2478"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1863}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/698f/902e/b3c73da218349c8891960ee78733df7d"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1867}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e2/3e22/477aae0da3f42831f5e6441466ab1ded"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e2/3e22/477aae0da3f42831f5e6441466ab1ded"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1871}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df9d/c214/d6a4f37e9415b087e2f0dc237850021c"
            }}
            style={styles.ImageBackground_I1052_1520_1038_1872}
          />
        </View>
        <View style={styles.View_1052_1526}>
          <View style={styles.View_1052_1527} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3e/5bc7/3dfc026291b2949617dddc58a43b1dc3"
            }}
            style={styles.ImageBackground_1052_1528}
          />
          <View style={styles.View_1052_1529}>
            <Text style={styles.Text_1052_1529}>hello@aliaziz.design</Text>
          </View>
          <View style={styles.View_1052_1530}>
            <Text style={styles.Text_1052_1530}>
              I enjoy discussing new Ui/Ux projects and design challenges.
              Please share as much info, as possible so we can get the most out
              of our first catch-up. You can also email me at
            </Text>
          </View>
          <View style={styles.View_1052_1531}>
            <View style={styles.View_1052_1532}>
              <Text style={styles.Text_1052_1532}>Say Hi!</Text>
            </View>
          </View>
          <View style={styles.View_1052_1533}>
            <View style={styles.View_1052_1534} />
            <View style={styles.View_1052_1535}>
              <View style={styles.View_1052_1536}>
                <Text style={styles.Text_1052_1536}>Quick chat</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef0a/ac74/3497a94fea763f513831be3bdd9a7355"
                }}
                style={styles.ImageBackground_1052_1537}
              />
            </View>
          </View>
          <View style={styles.View_1052_1539} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b406/3060/5f7b24279877726f167724d4b13591ad"
            }}
            style={styles.ImageBackground_1052_1540}
          />
          <View style={styles.View_1052_1541} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f29f/47b7/e053eecd50789a249700cf088f904842"
            }}
            style={styles.ImageBackground_1052_1542}
          />
          <View style={styles.View_1052_1543}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9657/61fb/54d6f0b291d5d613c8ee00b3f3e3e74b"
              }}
              style={styles.ImageBackground_1052_1544}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9657/61fb/54d6f0b291d5d613c8ee00b3f3e3e74b"
              }}
              style={styles.ImageBackground_1052_1545}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/abec/01dcef501822459e1c0c0b6ac2eb3d22"
              }}
              style={styles.ImageBackground_1052_1546}
            />
          </View>
          <View style={styles.View_1052_1547}>
            <Text style={styles.Text_1052_1547}>Ali Aziz</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_974_1877}>
        <Text style={styles.Text_974_1877}>
          I approach design with a goal in mind and enjoy assisting
          entrepreneurs/startups in their endeavours.
        </Text>
      </View>
      <View style={styles.View_974_1955}>
        <View style={styles.View_974_1957} />
        <View style={styles.View_1018_2383}>
          <Text style={styles.Text_1018_2383}>ethizo Provider</Text>
        </View>
        <View style={styles.View_1018_2384}>
          <Text style={styles.Text_1018_2384}>
            Ethizo goal is to empower healthcare providers, care teams, and
            patients with the technology built around automation.
          </Text>
        </View>
        <View style={styles.View_974_1965}>
          <View style={styles.View_974_1966}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e2b/ee66/250b2d64b6cbf1993a13445515e7f715"
              }}
              style={styles.ImageBackground_974_1967}
            />
            <View style={styles.View_1018_2367}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f408/3295/70494fd44bba515ebec0c3509ea79bff"
                }}
                style={styles.ImageBackground_1018_2366}
              />
              <View style={styles.View_1020_2425}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b15/3898/0733efa88a1c54dd1f15cd4c42963712"
                  }}
                  style={styles.ImageBackground_1020_2426}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4340/d829/b3b3943191f0669a0f890c29064ba178"
                  }}
                  style={styles.ImageBackground_1020_2427}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d8b/2243/36e38d395fe30f3abc92a2d847d75229"
                  }}
                  style={styles.ImageBackground_1020_2428}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f51b/84f7/8399d95c4d023d18edfea2f21d2d02d2"
                  }}
                  style={styles.ImageBackground_1020_2429}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f84/f8e6/c43b5db54cf743662e2e4bee8fd22036"
                  }}
                  style={styles.ImageBackground_1020_2430}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f847/2035/864c7adab6930d3a633d787b2dd546de"
                  }}
                  style={styles.ImageBackground_1020_2431}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e15/8069/1807eb1a6fd1bfc62733cf83d3d347f3"
                  }}
                  style={styles.ImageBackground_1020_2432}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa14/d565/4237616bd8dd5f7c5b7e9b4e80b62033"
                }}
                style={styles.ImageBackground_1018_2378}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75be/f948/0fe8a603900f4bbd4b634b240c96b32c"
                }}
                style={styles.ImageBackground_1018_2379}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5063/a2b9/9ff101421fa5817afcbced807fa86630"
                }}
                style={styles.ImageBackground_1018_2364}
              />
              <View style={styles.View_1020_2504} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dc2/eb55/313da50520dbd6c3411a913d62033730"
              }}
              style={styles.ImageBackground_1018_2355}
            />
            <View style={styles.View_1018_2356}>
              <View style={styles.View_1018_2357}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302f/7a45/94e2dff6ce9811dc92c58fd0f509a544"
                  }}
                  style={styles.ImageBackground_1018_2358}
                />
                <View style={styles.View_1018_2359} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98dd/63a2/9235a52b92953cf1387984f63e16fc8f"
                }}
                style={styles.ImageBackground_1018_2360}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bbc/325f/aa3ca44d018103a38ddacea4d00e3931"
                }}
                style={styles.ImageBackground_1018_2361}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea7/eae3/9ba29aedbf556ac38db811c29dce4ad3"
                }}
                style={styles.ImageBackground_1018_2362}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcda/4b0b/6c9b335ad354cf0115b3a3f3bc509437"
              }}
              style={styles.ImageBackground_1018_2363}
            />
          </View>
        </View>
        <View style={styles.View_1020_2535}>
          <View style={styles.View_974_1961}>
            <Text style={styles.Text_974_1961}>View Case study</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67a7/9cde/93de4f646d7ad0777683fa0040a2fdaa"
            }}
            style={styles.ImageBackground_1020_2436}
          />
        </View>
      </View>
      <View style={styles.View_1028_1299}>
        <View style={styles.View_1028_1300} />
        <View style={styles.View_1028_1301}>
          <Text style={styles.Text_1028_1301}>ethizo Patient</Text>
        </View>
        <View style={styles.View_1028_1302}>
          <Text style={styles.Text_1028_1302}>
            Ethizo patient is perfect portal to build a relationship between
            physician and patient. Access your online health records, check you
            care plan, book appointments etc...
          </Text>
        </View>
        <View style={styles.View_1028_1304}>
          <View style={styles.View_1028_1305}>
            <View style={styles.View_1028_1306} />
            <View style={styles.View_1028_1307}>
              <View style={styles.View_1028_1308} />
              <View style={styles.View_1028_1309}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b15/3898/0733efa88a1c54dd1f15cd4c42963712"
                  }}
                  style={styles.ImageBackground_1028_1310}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4340/d829/b3b3943191f0669a0f890c29064ba178"
                  }}
                  style={styles.ImageBackground_1028_1311}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79ec/d4b2/b1484cb14fa1e0ee2ee3b3c0d0975d4b"
                  }}
                  style={styles.ImageBackground_1028_1312}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f51b/84f7/8399d95c4d023d18edfea2f21d2d02d2"
                  }}
                  style={styles.ImageBackground_1028_1313}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f84/f8e6/c43b5db54cf743662e2e4bee8fd22036"
                  }}
                  style={styles.ImageBackground_1028_1314}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f847/2035/864c7adab6930d3a633d787b2dd546de"
                  }}
                  style={styles.ImageBackground_1028_1315}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e15/8069/1807eb1a6fd1bfc62733cf83d3d347f3"
                  }}
                  style={styles.ImageBackground_1028_1316}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa14/d565/4237616bd8dd5f7c5b7e9b4e80b62033"
                }}
                style={styles.ImageBackground_1028_1319}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ffb/e25e/87a1808bfb0a774eccd8119d3b028540"
                }}
                style={styles.ImageBackground_1028_1320}
              />
              <View style={styles.View_1034_1517}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69bc/4d95/fd3d95ba1a4e37c2bd9b06ecf974c1d3"
                  }}
                  style={styles.ImageBackground_1034_1518}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af37/639e/6d9bf8224dea57c174505fd2283df7c4"
                  }}
                  style={styles.ImageBackground_1034_1519}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a56/45ba/84c56072156f6f0123ce1b40d84fd0b1"
                  }}
                  style={styles.ImageBackground_1034_1520}
                />
              </View>
              <View style={styles.View_1028_1325} />
            </View>
          </View>
        </View>
        <View style={styles.View_1028_1335}>
          <View style={styles.View_1028_1336}>
            <Text style={styles.Text_1028_1336}>View Case study</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67a7/9cde/93de4f646d7ad0777683fa0040a2fdaa"
            }}
            style={styles.ImageBackground_1028_1337}
          />
        </View>
        <View style={styles.View_1058_1602}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267b/f6cf/a21882ee8565e4cc8d024e5702b38908"
            }}
            style={styles.ImageBackground_1058_1603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545d/eba6/c52a26c97a3474ad6963d23d3bffcf53"
            }}
            style={styles.ImageBackground_1058_1604}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c926/5e2a/d828ad5dae35932fee1bb7996c9fba00"
            }}
            style={styles.ImageBackground_1058_1605}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9c/1d7a/db265b1134ae86ef2de4d0c91239a0cb"
            }}
            style={styles.ImageBackground_1058_1606}
          />
        </View>
      </View>
      <View style={styles.View_1034_1533}>
        <View style={styles.View_1034_1534} />
        <View style={styles.View_1034_1535}>
          <Text style={styles.Text_1034_1535}>Popstroke</Text>
        </View>
        <View style={styles.View_1034_1536}>
          <Text style={styles.Text_1034_1536}>
            PopStroke is an experiential golf and casual dining concept merging
            a dynamic, technologically-advanced competitive golf environment
            with food and beverage
          </Text>
        </View>
        <View style={styles.View_1034_1537}>
          <View style={styles.View_1034_1538}>
            <View style={styles.View_1034_1539} />
            <View style={styles.View_1034_1540}>
              <View style={styles.View_1034_1541} />
              <View style={styles.View_1034_1693}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d96a/d072/fd31d28bd28da518d95f6dba9e9a09ed"
                  }}
                  style={styles.ImageBackground_1034_1694}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2164/2f5b/bc11e213994e8ed5cb4da10d635c51de"
                  }}
                  style={styles.ImageBackground_1034_1695}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa8b/1681/e23fd9d0244e7ebbed2df5f3fd54dca9"
                  }}
                  style={styles.ImageBackground_1034_1696}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dda/0cc4/1c5d0f95a7c2dcdd8d30d042392643b7"
                  }}
                  style={styles.ImageBackground_1034_1697}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a7a/52ce/731e7d925a7482cd8487ab2e80fcbbea"
                  }}
                  style={styles.ImageBackground_1034_1698}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35f1/77c2/a8aa576a06a39c524a42659536dcfcde"
                  }}
                  style={styles.ImageBackground_1034_1699}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3500/e337/e46140d381ee68cf5e85e74a63b487e2"
                  }}
                  style={styles.ImageBackground_1034_1700}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86ed/830f/549bb191cf1859b9b8c0e01fc83efdc8"
                  }}
                  style={styles.ImageBackground_1034_1701}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4832/3ffe/4dd607d0bb6ddbae1db4c263fa7a4589"
                  }}
                  style={styles.ImageBackground_1034_1702}
                />
              </View>
              <View style={styles.View_1034_1623}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f7f/3eef/4750fdbfde5ee02da1aa1dc3bdc2c2c9"
                  }}
                  style={styles.ImageBackground_1034_1624}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8645/531c/40b049447a61efa58df002df2cbaf565"
                  }}
                  style={styles.ImageBackground_1034_1630}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e03/6d39/aeca531aecccbc2e72ebd71a5d035251"
                  }}
                  style={styles.ImageBackground_1034_1631}
                />
                <View style={styles.View_1034_1632}>
                  <Text style={styles.Text_1034_1632}>Cooper Kristin</Text>
                </View>
                <View style={styles.View_1034_1633}>
                  <Text style={styles.Text_1034_1633}>16</Text>
                </View>
                <View style={styles.View_1034_1634}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee1/0fae/47599481fb14202fed2345c43eb348aa"
                    }}
                    style={styles.ImageBackground_I1034_1634_993_1662}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6db7/6969/1f8036be906af20d01c715e981511ae5"
                  }}
                  style={styles.ImageBackground_1034_1640}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1034_1562}>
          <View style={styles.View_1034_1563}>
            <Text style={styles.Text_1034_1563}>View Case study</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67a7/9cde/93de4f646d7ad0777683fa0040a2fdaa"
            }}
            style={styles.ImageBackground_1034_1564}
          />
        </View>
        <View style={styles.View_1058_1610} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a0b/5c8d/dfa288c230faab95e9a0d736f8c3cf98"
          }}
          style={styles.ImageBackground_1058_1611}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/7b12/ffc3e8177ddd71b9189bbdb39cb1779c"
          }}
          style={styles.ImageBackground_1058_1613}
        />
      </View>
      <View style={styles.View_1052_1317}>
        <View style={styles.View_1052_1318} />
        <View style={styles.View_1052_1319}>
          <Text style={styles.Text_1052_1319}>The Dubai Mall</Text>
        </View>
        <View style={styles.View_1052_1320}>
          <Text style={styles.Text_1052_1320}>
            Aims to refresh existing functionality to create an experience that
            better reflects the rich experience within the mall while being more
            engaging and modern.
          </Text>
        </View>
        <View style={styles.View_1052_1321}>
          <View style={styles.View_1052_1322}>
            <View style={styles.View_1052_1323} />
            <View style={styles.View_1052_1324}>
              <View style={styles.View_1052_1325} />
              <View style={styles.View_1058_1601} />
              <View style={styles.View_1052_1457}>
                <View style={styles.View_1052_1458}>
                  <View style={styles.View_1052_1459} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd2c/2168/959973e9c74f41d584b4da985f43c2fe"
                    }}
                    style={styles.ImageBackground_1052_1460}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/535f/371c/12a5a78f689ebb4b07cf824b3bac4008"
                    }}
                    style={styles.ImageBackground_1052_1461}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d0/d970/b2396404422654c3cba4750e91d164b6"
                    }}
                    style={styles.ImageBackground_1052_1462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6195/5dc6/93b840bcdd04169c7acc224f294e4b67"
                    }}
                    style={styles.ImageBackground_1052_1463}
                  />
                </View>
                <View style={styles.View_1052_1464}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da58/9da2/2813df6446d76d808cf05b5fd4799f16"
                    }}
                    style={styles.ImageBackground_1052_1465}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6d/3cdf/5dbd486b67419d3d89545ac45eec4081"
                    }}
                    style={styles.ImageBackground_1052_1466}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc59/539f/7436c516c6e256e6f04b523c044ab2c1"
                  }}
                  style={styles.ImageBackground_1052_1467}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c31/e620/41fd5f4b3ecbff8f1ffc7cbd915e4415"
                  }}
                  style={styles.ImageBackground_1052_1469}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/131d/0fd5/2cee60a2b0d86dfcbe5e62ec662fb870"
                  }}
                  style={styles.ImageBackground_1052_1470}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d36c/c54f/73af3dbaf7819bed98a5463d69dac5de"
                  }}
                  style={styles.ImageBackground_1052_1471}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1052_1344}>
          <View style={styles.View_1052_1345}>
            <Text style={styles.Text_1052_1345}>View Case study</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67a7/9cde/93de4f646d7ad0777683fa0040a2fdaa"
            }}
            style={styles.ImageBackground_1052_1346}
          />
        </View>
      </View>
      <View style={styles.View_974_2009}>
        <View style={styles.View_1020_3405}>
          <View style={styles.View_974_2010} />
          <View style={styles.View_1020_2536}>
            <View style={styles.View_1020_2537}>
              <Text style={styles.Text_1020_2537}>View Case study</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67a7/9cde/93de4f646d7ad0777683fa0040a2fdaa"
              }}
              style={styles.ImageBackground_1020_2538}
            />
          </View>
          <View style={styles.View_1020_2505}>
            <Text style={styles.Text_1020_2505}>Betts Connect</Text>
          </View>
          <View style={styles.View_1020_2506}>
            <Text style={styles.Text_1020_2506}>
              Complete product design for leading global recruitment firm for
              revenue-generating talent
            </Text>
          </View>
        </View>
        <View style={styles.View_974_2017}>
          <View style={styles.View_974_2018}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e28f/d36e/c6f02dee2570f244fd27750ca133a596"
              }}
              style={styles.ImageBackground_974_2019}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/331d/e146/0bb649ed417e4536f74924cdf7e196cc"
              }}
              style={styles.ImageBackground_1020_2539}
            />
            <View style={styles.View_1058_1587}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1965/028e/7e52545266c12a02337d235e08809a1d"
                }}
                style={styles.ImageBackground_I1058_1587_962_1399}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e702/ea07/730c3c6950a060a827beb17a71656b26"
                }}
                style={styles.ImageBackground_I1058_1587_962_1400}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f685/4f07/f8f7480b274504fc3fa28b2d8d6fd4d1"
                }}
                style={styles.ImageBackground_I1058_1587_962_1401}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2be9/778c/62a59f8ada8c28f3f83d8664edd2eb95"
                }}
                style={styles.ImageBackground_I1058_1587_962_1402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d4/ba9c/e63372d203c1bd1b70ed281374edab04"
                }}
                style={styles.ImageBackground_I1058_1587_962_1406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75be/8c3d/f8ed7a15b344e7ae16d03a0aa2edb455"
                }}
                style={styles.ImageBackground_I1058_1587_962_1409}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75be/8c3d/f8ed7a15b344e7ae16d03a0aa2edb455"
                }}
                style={styles.ImageBackground_I1058_1587_962_1410}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b43c/1829/e218277f637bfe3341f3f1f987006e8b"
                }}
                style={styles.ImageBackground_I1058_1587_962_1411}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bc4/021a/83e17843ff38eb9738c5403490cb0b23"
              }}
              style={styles.ImageBackground_1020_2603}
            />
            <View style={styles.View_1020_2588}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/239d/430a/67f1952009a9435fd8c5253d67aee0a6"
                }}
                style={styles.ImageBackground_1020_2540}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/862d/fb06/0725895514a72323c24eb34ab067962b"
                }}
                style={styles.ImageBackground_1020_2541}
              />
              <View style={styles.View_1020_2542} />
              <View style={styles.View_1020_2543}>
                <View style={styles.View_1020_2544} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acce/1a87/9aa4b222dc87f704574369f6e8215016"
                  }}
                  style={styles.ImageBackground_1020_2589}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eb5/c148/8ae24c7ba7942e29d2f9dd6a25ceb22c"
                  }}
                  style={styles.ImageBackground_1020_2590}
                />
                <View style={styles.View_1020_2547}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/300e/42d2/dfc32b0afa45c248f2b4e09be8a6068f"
                    }}
                    style={styles.ImageBackground_1020_2548}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91e6/fadc/ebdf96c3836a49ad7d6f31fbbb14b0ca"
                    }}
                    style={styles.ImageBackground_1020_2549}
                  />
                </View>
              </View>
              <View style={styles.View_1020_2554}>
                <View style={styles.View_1020_2555} />
                <View style={styles.View_1020_2556}>
                  <View style={styles.View_1020_2557} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a75b/3499/56eb6d4d54e96fcb2a95b2907b72ede9"
                    }}
                    style={styles.ImageBackground_1020_2591}
                  />
                </View>
                <View style={styles.View_1020_2559}>
                  <View style={styles.View_1020_2560} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e18f/40d5/f82497a9329e55f229874917af929630"
                    }}
                    style={styles.ImageBackground_1020_2592}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f37/6e30/99472e59d35e36290db23565aec83cfc"
                  }}
                  style={styles.ImageBackground_1020_2562}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/655b/0ab1/17514bead9d8164d79ecec9d6f174833"
                  }}
                  style={styles.ImageBackground_1020_2593}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5291/a1f2/4219d4611d933e492f6cf8ab6653ee97"
                  }}
                  style={styles.ImageBackground_1020_2594}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e178/03e9/baf772f8d821634774aa2313a0084af1"
                  }}
                  style={styles.ImageBackground_1020_2595}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b04/f6b8/6bb6066e303880e7843d0b5b1621c048"
                  }}
                  style={styles.ImageBackground_1020_2596}
                />
                <View style={styles.View_1020_2567}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0a9/2413/9bda41623034c6dae68865d086df2f0f"
                    }}
                    style={styles.ImageBackground_1020_2568}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b32/ba6b/fc8fb2e4cb942b9ec489eee4ef05c2de"
                    }}
                    style={styles.ImageBackground_1020_2570}
                  />
                </View>
              </View>
              <View style={styles.View_1020_2571}>
                <View style={styles.View_1020_2572} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dea/3487/a6fdd13622a5d51735c486a472617f9d"
                  }}
                  style={styles.ImageBackground_1020_2602}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5792/f2d3/7f3d9317d9c6609d15368cdc009e8203"
                  }}
                  style={styles.ImageBackground_1020_2597}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0528/1287/c16aa9a34337d9af50b951b0bb06e034"
                  }}
                  style={styles.ImageBackground_1020_2598}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7a4/5a80/14e2c53ee9176a9a51928462910d7114"
                  }}
                  style={styles.ImageBackground_1020_2576}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c1e/cc93/1fce02bcef1a20cf210720c422ac1b3b"
                  }}
                  style={styles.ImageBackground_1020_2577}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db10/145d/ee0bdbac4ea4510e5975056b5dd576bc"
                  }}
                  style={styles.ImageBackground_1020_2578}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/512e/f9a0/0c59b4cbca8193957179c9f45f198a32"
                  }}
                  style={styles.ImageBackground_1020_2599}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b24/d9db/851c033bbc5f812325918ebc79512bf8"
                  }}
                  style={styles.ImageBackground_1020_2600}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/512e/f9a0/0c59b4cbca8193957179c9f45f198a32"
                  }}
                  style={styles.ImageBackground_1020_2601}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/530b/c91c/39439113bbec06dbbfc91f13a9daed07"
                  }}
                  style={styles.ImageBackground_1020_2582}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b7c/b894/38cce86a3a3c867442f75311206a9ec5"
                  }}
                  style={styles.ImageBackground_1020_2583}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2617/bd81/7b5cc7dc4a20d8f1f20af4d7448395bf"
                  }}
                  style={styles.ImageBackground_1020_2584}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/578e/a934/1fc27a6375a2d0fe22ac283af44bf160"
                  }}
                  style={styles.ImageBackground_1020_2585}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/895c/7e83/eaedd7fd951d0867436a6ddd6a98499d"
                  }}
                  style={styles.ImageBackground_1020_2586}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ce/d5cb/2fc28f8214be36b9175ea27d63bf3540"
                }}
                style={styles.ImageBackground_1020_2587}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1052_1316}>
        <View style={styles.View_974_1843}>
          <View style={styles.View_I974_1843_162_291} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4278/8b2b/89afd6551c9e1e802d12f54d518c1977"
            }}
            style={styles.ImageBackground_I974_1843_193_1}
          />
          <View style={styles.View_I974_1843_162_293}>
            <View style={styles.View_I974_1843_162_294}>
              <Text style={styles.Text_I974_1843_162_294}>
                Instagram + Facebook + Behance + Dribbble
              </Text>
            </View>
            <View style={styles.View_I974_1843_162_295}>
              <Text style={styles.Text_I974_1843_162_295}>
                Copyright © 2010-2020 aliaziz.design . All rights reserved.
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5819/6202/c8f280a9d07b1579fe379f0cbae2a8ac"
            }}
            style={styles.ImageBackground_I974_1843_173_9}
          />
          <View style={styles.View_I974_1843_193_11}>
            <View style={styles.View_I974_1843_193_10} />
          </View>
        </View>
      </View>
      <View style={styles.View_1058_1575}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d276/3465/bba1ee26f45635328764ca12797faaf6"
          }}
          style={styles.ImageBackground_1058_1576}
        />
        <View style={styles.View_1058_1577}>
          <Text style={styles.Text_1058_1577}>Appointment</Text>
        </View>
        <View style={styles.View_1058_1578}>
          <Text style={styles.Text_1058_1578}>Your next</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a49/b3dc/7ee3805790b5c891e422ab944cee0fee"
          }}
          style={styles.ImageBackground_1058_1579}
        />
        <View style={styles.View_1058_1580}>
          <Text style={styles.Text_1058_1580}>FRI</Text>
        </View>
        <View style={styles.View_1058_1581}>
          <Text style={styles.Text_1058_1581}>April</Text>
        </View>
        <View style={styles.View_1058_1582}>
          <Text style={styles.Text_1058_1582}>24</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6f0/9241/4494b52692bd982477748132399ef2b8"
          }}
          style={styles.ImageBackground_1058_1583}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("947%") },
  ImageBackground_974_1821: {
    width: wp("7%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_974_1822: {
    width: wp("24%"),
    height: hp("52%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_974_1823: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("14%")
  },
  ImageBackground_974_1824: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_974_1825: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_974_1826: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_974_1827: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_974_1836: {
    width: wp("22%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_974_1837: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_974_1837: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1838: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_974_1838: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1839: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_974_1839: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1840: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_974_1840: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1841: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_974_1841: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1844: {
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_974_1844: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1846: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_974_1846: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1847: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("84%")
  },
  View_974_1848: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 1, 15, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  View_974_1849: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_974_1849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_974_1850: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("510%"),
    minHeight: hp("510%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 1, 15, 1)"
  },
  View_1052_1496: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("297%"),
    minHeight: hp("297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("630%")
  },
  View_1052_1497: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("168%"),
    minHeight: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1052_1498: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1052_1499: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("163%"),
    minHeight: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  ImageBackground_1058_1561: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%")
  },
  View_1052_1500: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("45%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1058_1562: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("104%")
  },
  View_1058_1574: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_1058_1563: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1058_1563: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_1564: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1058_1564: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1058_1565: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1058_1566: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("104%")
  },
  View_1058_1567: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1058_1567: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_1568: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1058_1568: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1058_1569: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1058_1631: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("104%")
  },
  View_1058_1632: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1058_1632: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_1633: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1058_1633: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1058_1634: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1052_1501: {
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_1052_1501: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1502: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_1052_1502: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1503: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_1052_1503: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1520: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1052_1520_1038_1860: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1052_1520_1038_1861: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I1052_1520_1038_1862: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I1052_1520_1038_1863: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1052_1520_1038_1867: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I1052_1520_1038_1870: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I1052_1520_1038_1871: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I1052_1520_1038_1872: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_1052_1526: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("150%")
  },
  View_1052_1527: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 195, 8, 1)"
  },
  ImageBackground_1052_1528: {
    width: wp("24%"),
    height: hp("52%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_1052_1529: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_1052_1529: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1530: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_1052_1530: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1531: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("35%")
  },
  View_1052_1532: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1052_1532: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1533: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("91%")
  },
  View_1052_1534: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_1052_1535: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_1052_1536: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1052_1536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1052_1537: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1052_1539: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1052_1540: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_1052_1541: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1052_1542: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  View_1052_1543: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("3%")
  },
  ImageBackground_1052_1544: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1052_1545: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1052_1546: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1052_1547: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_1052_1547: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1877: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_974_1877: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1955: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("330%")
  },
  View_974_1957: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 248, 251, 1)"
  },
  View_1018_2383: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1018_2383: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2384: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_1018_2384: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_1965: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_974_1966: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_974_1967: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1018_2367: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1018_2366: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1020_2425: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1020_2426: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1020_2427: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1020_2428: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1020_2429: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1020_2430: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1020_2431: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1020_2432: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1018_2378: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("45%")
  },
  ImageBackground_1018_2379: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_1018_2364: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("-9%")
  },
  View_1020_2504: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  ImageBackground_1018_2355: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("47%")
  },
  View_1018_2356: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("41%")
  },
  View_1018_2357: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1018_2358: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1018_2359: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    backgroundColor: "rgba(240, 244, 247, 1)"
  },
  ImageBackground_1018_2360: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_1018_2361: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  ImageBackground_1018_2362: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%")
  },
  ImageBackground_1018_2363: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("57%")
  },
  View_1020_2535: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("67%")
  },
  View_974_1961: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_974_1961: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1020_2436: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1028_1299: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("426%")
  },
  View_1028_1300: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 248, 251, 1)"
  },
  View_1028_1301: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1028_1301: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1028_1302: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_1028_1302: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1028_1304: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_1028_1305: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1028_1306: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1028_1307: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1028_1308: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 192, 128, 1)"
  },
  View_1028_1309: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1028_1310: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1028_1311: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1028_1312: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1028_1313: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1028_1314: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1028_1315: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1028_1316: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1028_1319: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("45%")
  },
  ImageBackground_1028_1320: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_1034_1517: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%")
  },
  ImageBackground_1034_1518: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1034_1519: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1034_1520: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1028_1325: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%")
  },
  View_1028_1335: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("72%")
  },
  View_1028_1336: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1028_1336: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1028_1337: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1058_1602: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("52%")
  },
  ImageBackground_1058_1603: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1058_1604: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  ImageBackground_1058_1605: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%")
  },
  ImageBackground_1058_1606: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1034_1533: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("522%")
  },
  View_1034_1534: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 248, 251, 1)"
  },
  View_1034_1535: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1034_1535: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1034_1536: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_1034_1536: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1034_1537: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_1034_1538: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1034_1539: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1034_1540: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1034_1541: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 192, 128, 1)"
  },
  View_1034_1693: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1034_1694: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("41%")
  },
  ImageBackground_1034_1695: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%")
  },
  ImageBackground_1034_1696: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("56%")
  },
  ImageBackground_1034_1697: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("71%")
  },
  ImageBackground_1034_1698: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("61%")
  },
  ImageBackground_1034_1699: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("6%")
  },
  ImageBackground_1034_1700: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("26%")
  },
  ImageBackground_1034_1701: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  ImageBackground_1034_1702: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("19%")
  },
  View_1034_1623: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  ImageBackground_1034_1624: {
    width: wp("5%"),
    height: hp("49%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_1034_1630: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_1034_1631: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_1034_1632: {
    width: wp("3%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_1034_1632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24,
    textTransform: "uppercase"
  },
  View_1034_1633: {
    width: wp("1%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_1034_1633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44,
    textTransform: "uppercase"
  },
  View_1034_1634: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1034_1634_993_1662: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_1034_1640: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1034_1562: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%")
  },
  View_1034_1563: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1034_1563: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1034_1564: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1058_1610: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("55%")
  },
  ImageBackground_1058_1611: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_1058_1613: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_1052_1317: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("235%")
  },
  View_1052_1318: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 248, 251, 1)"
  },
  View_1052_1319: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1052_1319: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1320: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_1052_1320: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1321: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_1052_1322: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1052_1323: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1052_1324: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1052_1325: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 192, 128, 1)"
  },
  View_1058_1601: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1052_1457: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("6%")
  },
  View_1052_1458: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_1052_1459: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_1052_1460: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1052_1461: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("26%")
  },
  ImageBackground_1052_1462: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("-3%")
  },
  ImageBackground_1052_1463: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("-15%")
  },
  View_1052_1464: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_1052_1465: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1052_1466: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_1052_1467: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%")
  },
  ImageBackground_1052_1469: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("27%")
  },
  ImageBackground_1052_1470: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("40%")
  },
  ImageBackground_1052_1471: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("54%")
  },
  View_1052_1344: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("67%")
  },
  View_1052_1345: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1052_1345: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1052_1346: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_974_2009: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("139%")
  },
  View_1020_3405: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_974_2010: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 248, 251, 1)"
  },
  View_1020_2536: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("63%")
  },
  View_1020_2537: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_1020_2537: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1020_2538: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_1020_2505: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1020_2505: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1020_2506: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_1020_2506: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_974_2017: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_974_2018: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_974_2019: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1020_2539: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1058_1587: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1058_1587_962_1399: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1058_1587_962_1400: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_I1058_1587_962_1401: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_I1058_1587_962_1402: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1058_1587_962_1406: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_I1058_1587_962_1409: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  ImageBackground_I1058_1587_962_1410: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_I1058_1587_962_1411: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  ImageBackground_1020_2603: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("273%"),
    minHeight: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21%"),
    top: hp("-7%"),
    resizeMode: "cover"
  },
  View_1020_2588: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("5%")
  },
  ImageBackground_1020_2540: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("51%")
  },
  ImageBackground_1020_2541: {
    width: wp("22%"),
    height: hp("30%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_1020_2542: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  },
  View_1020_2543: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("33%")
  },
  View_1020_2544: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1020_2589: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_1020_2590: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  View_1020_2547: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_1020_2548: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1020_2549: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1020_2554: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("43%")
  },
  View_1020_2555: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1020_2556: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("10%")
  },
  View_1020_2557: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(6, 197, 222, 1)",
    borderWidth: 0.7538642883300781
  },
  ImageBackground_1020_2591: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1020_2559: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%")
  },
  View_1020_2560: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(49, 216, 67, 1)",
    borderWidth: 0.7538642883300781
  },
  ImageBackground_1020_2592: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_1020_2562: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_1020_2593: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%")
  },
  ImageBackground_1020_2594: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%")
  },
  ImageBackground_1020_2595: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("11%")
  },
  ImageBackground_1020_2596: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%")
  },
  View_1020_2567: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  ImageBackground_1020_2568: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1020_2570: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1020_2571: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("57%")
  },
  View_1020_2572: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1020_2602: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_1020_2597: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  ImageBackground_1020_2598: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%")
  },
  ImageBackground_1020_2576: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_1020_2577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_1020_2578: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%")
  },
  ImageBackground_1020_2599: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_1020_2600: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_1020_2601: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%")
  },
  ImageBackground_1020_2582: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_1020_2583: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  ImageBackground_1020_2584: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  ImageBackground_1020_2585: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%")
  },
  ImageBackground_1020_2586: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%")
  },
  ImageBackground_1020_2587: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_1052_1316: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("905%")
  },
  View_974_1843: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I974_1843_162_291: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I974_1843_193_1: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%")
  },
  View_I974_1843_162_293: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("24%")
  },
  View_I974_1843_162_294: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I974_1843_162_294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I974_1843_162_295: {
    width: wp("21%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I974_1843_162_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I974_1843_173_9: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("33%")
  },
  View_I974_1843_193_11: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%")
  },
  View_I974_1843_193_10: {
    width: wp("16%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1058_1575: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("344%")
  },
  ImageBackground_1058_1576: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1058_1577: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1058_1577: {
    color: "rgba(72, 72, 72, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_1578: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_1058_1578: {
    color: "rgba(135, 133, 133, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1058_1579: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_1058_1580: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1058_1580: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_1581: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1058_1581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1058_1582: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1058_1582: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1058_1583: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
