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
        style={styles.ImageBackground_1018_2030}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3e/5bc7/3dfc026291b2949617dddc58a43b1dc3"
        }}
        style={styles.ImageBackground_1018_2031}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac4d/0a98/f5be11278a65f85bfc8488b4118726f6"
        }}
        style={styles.ImageBackground_1018_2032}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6da/ccf0/8c3f7ed7a6e5dfd53d83cf8307f2ba46"
        }}
        style={styles.ImageBackground_1018_2033}
      />
      <View style={styles.View_1018_2034}>
        <View style={styles.View_1018_2035} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a84/9bd6/25c230375a237c421ba086fcd2046a8c"
          }}
          style={styles.ImageBackground_1018_2036}
        />
        <View style={styles.View_1018_2045}>
          <View style={styles.View_1018_2046}>
            <Text style={styles.Text_1018_2046}>about</Text>
          </View>
          <View style={styles.View_1018_2047}>
            <Text style={styles.Text_1018_2047}>work</Text>
          </View>
          <View style={styles.View_1018_2048}>
            <Text style={styles.Text_1018_2048}>process</Text>
          </View>
          <View style={styles.View_1018_2049}>
            <Text style={styles.Text_1018_2049}>uncut &amp; raw</Text>
          </View>
        </View>
        <View style={styles.View_1018_2050}>
          <Text style={styles.Text_1018_2050}>hello@aliaziz.design</Text>
        </View>
      </View>
      <View style={styles.View_1018_2053}>
        <Text style={styles.Text_1018_2053}>a creative problem solver</Text>
      </View>
      <View style={styles.View_1018_2055}>
        <Text style={styles.Text_1018_2055}>👋 Hi, I&#39;m ali</Text>
      </View>
      <View style={styles.View_1018_2056}>
        <View style={styles.View_1018_2057} />
        <View style={styles.View_1018_2058}>
          <Text style={styles.Text_1018_2058}>Discuss Project</Text>
        </View>
      </View>
      <View style={styles.View_1018_2059} />
      <View style={styles.View_1018_2133}>
        <Text style={styles.Text_1018_2133}>
          I approach design with a goal in mind and enjoy assisting
          entrepreneurs/startups in their endeavours.
        </Text>
      </View>
      <View style={styles.View_1018_2216}>
        <View style={styles.View_1018_2217} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cab/45c7/589e42e596b2014cb2a5a9f3f2e9440f"
          }}
          style={styles.ImageBackground_1018_2218}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8348/ac91/98933b4f15141594f70fade62ef8bd6c"
          }}
          style={styles.ImageBackground_1018_2219}
        />
        <View style={styles.View_1018_2220}>
          <Text style={styles.Text_1018_2220}>Betts Recruiting</Text>
        </View>
        <View style={styles.View_1018_2221}>
          <Text style={styles.Text_1018_2221}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6874/9280/19cd837561e4ac79a3a9fe140063b128"
          }}
          style={styles.ImageBackground_1018_2222}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a51/d037/287c91a903946e9bec316fb95ffe7684"
          }}
          style={styles.ImageBackground_1018_2223}
        />
        <View style={styles.View_1018_2224}>
          <View style={styles.View_1018_2225} />
          <View style={styles.View_1018_2226}>
            <Text style={styles.Text_1018_2226}>Position Desired</Text>
          </View>
          <View style={styles.View_1018_2227}>
            <Text style={styles.Text_1018_2227}>Account Executive</Text>
          </View>
          <View style={styles.View_1018_2228}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2461/a6c8/074b789ba8dc1a376f562a9e7dad2986"
              }}
              style={styles.ImageBackground_1018_2229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb72/56a6/39471869edef5057c9bcb0be42cbecd6"
              }}
              style={styles.ImageBackground_1018_2230}
            />
          </View>
        </View>
        <View style={styles.View_1018_2235}>
          <View style={styles.View_1018_2236} />
          <View style={styles.View_1018_2237}>
            <View style={styles.View_1018_2238} />
            <View style={styles.View_1018_2239}>
              <Text style={styles.Text_1018_2239}>$101-250</Text>
            </View>
          </View>
          <View style={styles.View_1018_2240}>
            <View style={styles.View_1018_2241} />
            <View style={styles.View_1018_2242}>
              <Text style={styles.Text_1018_2242}>Active</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7da2/db49/8f7d585279ed42be7070bede1e890cd7"
            }}
            style={styles.ImageBackground_1018_2243}
          />
          <View style={styles.View_1018_2244}>
            <Text style={styles.Text_1018_2244}>Anna White</Text>
          </View>
          <View style={styles.View_1018_2245}>
            <Text style={styles.Text_1018_2245}>Sr Account Executive</Text>
          </View>
          <View style={styles.View_1018_2246}>
            <Text style={styles.Text_1018_2246}>Deal Size</Text>
          </View>
          <View style={styles.View_1018_2247}>
            <Text style={styles.Text_1018_2247}>Status</Text>
          </View>
          <View style={styles.View_1018_2248}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a59c/dd16/4e7db96b01a4c555890952157cd3a47b"
              }}
              style={styles.ImageBackground_1018_2249}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21b0/e401/8476ff834a722aad14a8a5113812c0f3"
              }}
              style={styles.ImageBackground_1018_2251}
            />
          </View>
        </View>
        <View style={styles.View_1018_2252}>
          <View style={styles.View_1018_2253} />
          <View style={styles.View_1018_2254}>
            <Text style={styles.Text_1018_2254}>Pending</Text>
          </View>
          <View style={styles.View_1018_2255}>
            <Text style={styles.Text_1018_2255}>Interviewing</Text>
          </View>
          <View style={styles.View_1018_2256}>
            <Text style={styles.Text_1018_2256}>Offer</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75a0/217d/34f2d3549e6ce37d244f9f3d5ed94b8a"
            }}
            style={styles.ImageBackground_1018_2257}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af95/a443/2191ddf4577d43c391c6cbd1920884f4"
            }}
            style={styles.ImageBackground_1018_2258}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee4f/3654/2690faf891f0d9677701e2c5e78c2e08"
            }}
            style={styles.ImageBackground_1018_2259}
          />
          <View style={styles.View_1018_2260}>
            <Text style={styles.Text_1018_2260}>1</Text>
          </View>
          <View style={styles.View_1018_2261}>
            <Text style={styles.Text_1018_2261}>3</Text>
          </View>
          <View style={styles.View_1018_2262}>
            <Text style={styles.Text_1018_2262}>1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/667b/e6d8/59dd6d5ceea48559c3d02a81bac29713"
            }}
            style={styles.ImageBackground_1018_2263}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/947f/d9a1/ebeae057f49d5b0c53727d327f1e4f30"
            }}
            style={styles.ImageBackground_1018_2264}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d4/8f4b/ed20d1d47757d57766caf74d361de5d4"
            }}
            style={styles.ImageBackground_1018_2265}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5679/5303/9937c705dabcfc6dd257a686d3a97ad5"
            }}
            style={styles.ImageBackground_1018_2266}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb38/c238/bf1a9b741ffe183f85b8feaa14f92ae9"
            }}
            style={styles.ImageBackground_1018_2267}
          />
        </View>
        <View style={styles.View_1018_2268}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84eb/30fc/48aac1df372e4fd820e49092334a1bfb"
            }}
            style={styles.ImageBackground_I1018_2268_962_1399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60cd/71e6/6cd87fc10d68cb933f429b3c2f78a1ad"
            }}
            style={styles.ImageBackground_I1018_2268_962_1400}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44b/b6e0/bc122df6c2aec71830e47f82525d4785"
            }}
            style={styles.ImageBackground_I1018_2268_962_1401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6339/984b/559ab6074bf6f18eeae9db8ac2ec4fc9"
            }}
            style={styles.ImageBackground_I1018_2268_962_1402}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ca/7d06/e6ec90e09008b2726b736866ff0b6271"
            }}
            style={styles.ImageBackground_I1018_2268_962_1406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/c4e5/e141b095b7c749c017a517af7616a29f"
            }}
            style={styles.ImageBackground_I1018_2268_962_1409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/c4e5/e141b095b7c749c017a517af7616a29f"
            }}
            style={styles.ImageBackground_I1018_2268_962_1410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/940c/d171/1d087b0bca511ce4095e804d9e76e9b2"
            }}
            style={styles.ImageBackground_I1018_2268_962_1411}
          />
        </View>
      </View>
      <View style={styles.View_1018_2269}>
        <View style={styles.View_1018_2270} />
        <View style={styles.View_1018_2277}>
          <Text style={styles.Text_1018_2277}>Popstroke</Text>
        </View>
        <View style={styles.View_1018_2278}>
          <Text style={styles.Text_1018_2278}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <View style={styles.View_1034_1622}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd24/b1c1/29a1278217b08ef2986d7f906464898b"
            }}
            style={styles.ImageBackground_1018_2271}
          />
          <View style={styles.View_1018_2272}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9da/c4ff/8580f68f2ab1ce4fc7f38adac1f51d8b"
              }}
              style={styles.ImageBackground_1018_2273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78b/116b/0dfd7084ae7ef9471825e5747eb5c601"
              }}
              style={styles.ImageBackground_1018_2274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa1e/2e8f/ccaccbd745fa326b67f648be7178e02a"
              }}
              style={styles.ImageBackground_1018_2275}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6861/5e49/dbe4cae0fac420591297e56faa062312"
            }}
            style={styles.ImageBackground_1018_2276}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f092/2f19/f14b01a21dfcbb58d2364f0fdc9e20e1"
            }}
            style={styles.ImageBackground_1018_2279}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5657/ef29/1e7e56f0604e322d9c31af0797056063"
            }}
            style={styles.ImageBackground_1018_2280}
          />
          <View style={styles.View_1018_2281}>
            <Text style={styles.Text_1018_2281}>Cooper Kristin</Text>
          </View>
          <View style={styles.View_1018_2282}>
            <Text style={styles.Text_1018_2282}>16</Text>
          </View>
          <View style={styles.View_1018_2283}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/164f/1501/31036535018811621d288f59f81edbf2"
              }}
              style={styles.ImageBackground_I1018_2283_993_1662}
            />
          </View>
          <View style={styles.View_1018_2284}>
            <View style={styles.View_1018_2285} />
            <View style={styles.View_1018_2286}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ce6/f506/ebf6ab68e252f7be067b7c142b6f296d"
                }}
                style={styles.ImageBackground_1018_2287}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba1e/5a64/b9a983c8b13535ba11ed79c6c72dbc80"
                }}
                style={styles.ImageBackground_1018_2288}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/6a9f/e9b980e34ce22beac57afb69b57a4b5b"
            }}
            style={styles.ImageBackground_1018_2289}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/7b12/ffc3e8177ddd71b9189bbdb39cb1779c"
          }}
          style={styles.ImageBackground_1018_2290}
        />
      </View>
      <View style={styles.View_1046_1321}>
        <View style={styles.View_1046_1322} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea97/55be/743d0fc838e6b5f11e145d405421183d"
          }}
          style={styles.ImageBackground_1047_1393}
        />
        <View style={styles.View_1046_1323}>
          <Text style={styles.Text_1046_1323}>Patient app</Text>
        </View>
        <View style={styles.View_1046_1324}>
          <Text style={styles.Text_1046_1324}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b4/5239/00900f17f92a471a89995e770c77ab69"
          }}
          style={styles.ImageBackground_1046_1363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e44/e1d4/785c4da1b9cf4a2d9cb892e00d99b0a8"
          }}
          style={styles.ImageBackground_1047_1390}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/f2bc/f3ee1d2b4a4a88bd898961aa0f74a3c8"
          }}
          style={styles.ImageBackground_1048_1477}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a66/45f3/13affe798d8e2c43cc2c725ee9bb55f3"
          }}
          style={styles.ImageBackground_1047_1394}
        />
      </View>
      <View style={styles.View_1048_1439}>
        <View style={styles.View_1048_1440} />
        <View style={styles.View_1048_1442}>
          <Text style={styles.Text_1048_1442}>Patient app</Text>
        </View>
        <View style={styles.View_1048_1443}>
          <Text style={styles.Text_1048_1443}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <View style={styles.View_1048_1522}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1c0/898c/eb290bd4266adabe1d657cbc0b10e951"
            }}
            style={styles.ImageBackground_1048_1523}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2032/4cef/b2568d77b4a3eeae3fb0f598eba5bdab"
            }}
            style={styles.ImageBackground_1048_1524}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60a/75c9/12c8b69c06977e2c7b5c6eb28feee739"
            }}
            style={styles.ImageBackground_1048_1525}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9630/9a02/a095704db662d7e4e76b36067ff65077"
            }}
            style={styles.ImageBackground_1048_1526}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c92/bdd5/fdaefa7abf734f08d1d49c70b3bd10f6"
            }}
            style={styles.ImageBackground_1048_1527}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b1/07df/439c3526c436658dec7724b7186cb887"
            }}
            style={styles.ImageBackground_1048_1528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb4e/ab4f/632f92143215bf60c07aa921e5e55e13"
            }}
            style={styles.ImageBackground_1048_1529}
          />
        </View>
      </View>
      <View style={styles.View_1050_1625}>
        <View style={styles.View_1050_1626} />
        <View style={styles.View_1050_1627}>
          <Text style={styles.Text_1050_1627}>Dubai Mall</Text>
        </View>
        <View style={styles.View_1050_1628}>
          <Text style={styles.Text_1050_1628}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <View style={styles.View_1050_1629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6be/dd3a/90dead315c0148b9f5722a2075773191"
            }}
            style={styles.ImageBackground_1050_1630}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2032/4cef/b2568d77b4a3eeae3fb0f598eba5bdab"
            }}
            style={styles.ImageBackground_1050_1631}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60a/75c9/12c8b69c06977e2c7b5c6eb28feee739"
            }}
            style={styles.ImageBackground_1050_1632}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9630/9a02/a095704db662d7e4e76b36067ff65077"
            }}
            style={styles.ImageBackground_1050_1633}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c92/bdd5/fdaefa7abf734f08d1d49c70b3bd10f6"
            }}
            style={styles.ImageBackground_1050_1634}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b1/07df/439c3526c436658dec7724b7186cb887"
            }}
            style={styles.ImageBackground_1050_1635}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf40/7f03/5145c1f982ffee45a7959deed64073bd"
            }}
            style={styles.ImageBackground_1050_1636}
          />
        </View>
        <View style={styles.View_1051_1699}>
          <View style={styles.View_1051_1700} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a841/43fc/4027c70bf0670a2a82c09b1170fb656c"
            }}
            style={styles.ImageBackground_1051_1701}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/652a/1dea/ac649ed3159a74e795ad1fa802e11168"
            }}
            style={styles.ImageBackground_1051_1704}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a7e/f2b7/d76030575228848493fe486728aca9cb"
            }}
            style={styles.ImageBackground_1051_1702}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43a0/a426/e702ece070b45716b0fe4ec8907b12c4"
            }}
            style={styles.ImageBackground_1051_1703}
          />
        </View>
        <View style={styles.View_1051_1731}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7e1/6919/91ae780d0e4b4e3e0336f61067a69961"
            }}
            style={styles.ImageBackground_1051_1732}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e18/77d1/5fb53286191c1d04cb5fdf55cb548a8d"
            }}
            style={styles.ImageBackground_1051_1733}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b374/ce31/b10ca79fb035f92ba705f6d657900836"
        }}
        style={styles.ImageBackground_1047_1395}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9de1/0b45/fad713df6ddd55d17d1f816ff36d7da1"
        }}
        style={styles.ImageBackground_1047_1396}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8fe/971f/555aa473f4204b5e132f81383cd6bace"
        }}
        style={styles.ImageBackground_1046_1385}
      />
      <View style={styles.View_1047_1410}>
        <View style={styles.View_1046_1366}>
          <View style={styles.View_1046_1365}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2f4/db48/70c6ea1b9b7e268f5ce1c4a950aed4ed"
              }}
              style={styles.ImageBackground_1046_1360}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f6/294e/4d94d81adf8c4e092eb061a94ebab0a2"
            }}
            style={styles.ImageBackground_1046_1361}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38a1/8c10/4f239d85812b9b39783a81032baf49a2"
          }}
          style={styles.ImageBackground_1047_1408}
        />
      </View>
      <View style={styles.View_1047_1407}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4888/3824/2857745801c290faa898d93ae33e657a"
          }}
          style={styles.ImageBackground_1047_1404}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/383b/8e33/c88570473a881c8f78a906f9f850d75a"
          }}
          style={styles.ImageBackground_1047_1405}
        />
      </View>
      <View style={styles.View_1047_1403}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2338/feae/93a9221cdac099fbc5207d9a1b00bd84"
          }}
          style={styles.ImageBackground_1047_1398}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/167c/d629/714b70006f94eaffe3dfa9a067a9eef8"
          }}
          style={styles.ImageBackground_1047_1399}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe1/7f69/b001decbcfac6fbf1fc263c7385bb6a7"
          }}
          style={styles.ImageBackground_1047_1400}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78bc/0c1c/5c6db8a8456ed0ad9d1e6d12dbb529d6"
          }}
          style={styles.ImageBackground_1047_1401}
        />
      </View>
      <View style={styles.View_1048_1466}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6be/dd3a/90dead315c0148b9f5722a2075773191"
          }}
          style={styles.ImageBackground_1048_1467}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2032/4cef/b2568d77b4a3eeae3fb0f598eba5bdab"
          }}
          style={styles.ImageBackground_1048_1468}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60a/75c9/12c8b69c06977e2c7b5c6eb28feee739"
          }}
          style={styles.ImageBackground_1048_1469}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9630/9a02/a095704db662d7e4e76b36067ff65077"
          }}
          style={styles.ImageBackground_1048_1470}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c92/bdd5/fdaefa7abf734f08d1d49c70b3bd10f6"
          }}
          style={styles.ImageBackground_1048_1471}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b1/07df/439c3526c436658dec7724b7186cb887"
          }}
          style={styles.ImageBackground_1048_1472}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342b/1e67/f909a59247f75cd0c39062f8661b9ba3"
          }}
          style={styles.ImageBackground_1048_1473}
        />
      </View>
      <View style={styles.View_1048_1547}>
        <View style={styles.View_1048_1546} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b51/71c1/9f9b5227d15f9946fc5bf596c3d4e99d"
          }}
          style={styles.ImageBackground_1048_1492}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e355/6b67/016b0985d2b900009d161a399cc4fb40"
        }}
        style={styles.ImageBackground_1048_1478}
      />
      <View style={styles.View_1048_1550} />
      <View style={styles.View_1048_1480}>
        <View style={styles.View_1048_1481}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac17/6fed/229c060086bf23c5ea7a176fe5bd3a91"
            }}
            style={styles.ImageBackground_1048_1482}
          />
          <View style={styles.View_1048_1483} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7994/a1c8/4979820f402860c3f14faa88a43939e1"
          }}
          style={styles.ImageBackground_1048_1484}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d934/69a8/1735bcd07e5228c71dacda273e1c5714"
          }}
          style={styles.ImageBackground_1048_1485}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6980/9f83/3524793b16f087965f3eea8814cd0ad7"
          }}
          style={styles.ImageBackground_1048_1486}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6762/e10b/dbc4a033821eedb65ec35154466c5a03"
        }}
        style={styles.ImageBackground_1048_1479}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2833/af35/b5f8e8f98643f628c3b32b3b4bea3e96"
        }}
        style={styles.ImageBackground_1048_1487}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e97/c82d/c6446c7ab6f17f543dac8a51d80d87b1"
        }}
        style={styles.ImageBackground_1051_1657}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6139/86d2/414b45490cd5599f7ff7b927bd3c178f"
        }}
        style={styles.ImageBackground_1051_1728}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/839d/ed45/7fcd930bdf13b6809ffd0b29e0fed9a7"
        }}
        style={styles.ImageBackground_1051_1729}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/658a/c013/e4858aa744f2c5766d26b7994403bf67"
        }}
        style={styles.ImageBackground_1051_1730}
      />
      <View style={styles.View_1051_1863}>
        <View style={styles.View_I1051_1863_162_291} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bb/137c/459dba5f57861ff4757921fc3839b2e0"
          }}
          style={styles.ImageBackground_I1051_1863_193_1}
        />
        <View style={styles.View_I1051_1863_162_293}>
          <View style={styles.View_I1051_1863_162_294}>
            <Text style={styles.Text_I1051_1863_162_294}>
              Instagram + Facebook + Behance + Dribbble
            </Text>
          </View>
          <View style={styles.View_I1051_1863_162_295}>
            <Text style={styles.Text_I1051_1863_162_295}>
              Copyright © 2010-2020 aliaziz.design . All rights reserved.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5819/6202/c8f280a9d07b1579fe379f0cbae2a8ac"
          }}
          style={styles.ImageBackground_I1051_1863_173_9}
        />
        <View style={styles.View_I1051_1863_193_11}>
          <View style={styles.View_I1051_1863_193_10} />
        </View>
      </View>
      <View style={styles.View_1052_1472}>
        <View style={styles.View_1051_1802}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18c3/5cd0/be944fed7ab3de0afbb95a2a6423a518"
            }}
            style={styles.ImageBackground_1051_1799}
          />
          <View style={styles.View_1051_1800} />
        </View>
        <View style={styles.View_1051_1804} />
        <View style={styles.View_1051_1817}>
          <Text style={styles.Text_1051_1817}>Endorsements</Text>
        </View>
        <View style={styles.View_1051_1818}>
          <Text style={styles.Text_1051_1818}>
            Endorsements from people I have worked closely with, including
            Product Managers, fellow Designers, Engineers and colleagues from
            other disciplines.{" "}
          </Text>
        </View>
        <View style={styles.View_1051_1819}>
          <Text style={styles.Text_1051_1819}>
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
        <View style={styles.View_1051_1824}>
          <View style={styles.View_1051_1825}>
            <Text style={styles.Text_1051_1825}>CliffMcbride</Text>
          </View>
          <View style={styles.View_1051_1826}>
            <Text style={styles.Text_1051_1826}>
              Vice presedent at Betts Recruiting
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34ad/4f63/28edc128c75bba7b8631d4c33bc84438"
            }}
            style={styles.ImageBackground_1051_1827}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6354/9c99/a5a79f2ab975107d03b8326af4c50698"
          }}
          style={styles.ImageBackground_1051_1842}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4d0/6a55/02f2e0e4219194b97843c694c47dfc08"
          }}
          style={styles.ImageBackground_1051_1846}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d631/acdc/4e36295fdcb8fc6e8c128472792d598b"
          }}
          style={styles.ImageBackground_1051_1854}
        />
        <View style={styles.View_1051_1828}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d4/940b/0e6183b3d18a5e7050396260c76a64f0"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1860}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/954e/c105/85b655921eee0a8164680a501fe0a759"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1861}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac8/feff/97aecf41d43b97dcc025207ac55bcf27"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1862}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33ce/c1a3/3394f61d31284e00410882da67cc2478"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1863}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/698f/902e/b3c73da218349c8891960ee78733df7d"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1867}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e2/3e22/477aae0da3f42831f5e6441466ab1ded"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e2/3e22/477aae0da3f42831f5e6441466ab1ded"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1871}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df9d/c214/d6a4f37e9415b087e2f0dc237850021c"
            }}
            style={styles.ImageBackground_I1051_1828_1038_1872}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf3f/e8d1/749026af1adf63d7448d669def5eb327"
          }}
          style={styles.ImageBackground_1051_1858}
        />
        <View style={styles.View_1052_1473}>
          <View style={styles.View_1052_1474} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3e/5bc7/3dfc026291b2949617dddc58a43b1dc3"
            }}
            style={styles.ImageBackground_1052_1475}
          />
          <View style={styles.View_1052_1476}>
            <Text style={styles.Text_1052_1476}>hello@aliaziz.design</Text>
          </View>
          <View style={styles.View_1052_1477}>
            <Text style={styles.Text_1052_1477}>
              I enjoy discussing new Ui/Ux projects and design challenges.
              Please share as much info, as possible so we can get the most out
              of our first catch-up. You can also email me at
            </Text>
          </View>
          <View style={styles.View_1052_1478}>
            <View style={styles.View_1052_1479}>
              <Text style={styles.Text_1052_1479}>Say Hi!</Text>
            </View>
          </View>
          <View style={styles.View_1052_1480}>
            <View style={styles.View_1052_1481} />
            <View style={styles.View_1052_1482}>
              <View style={styles.View_1052_1483}>
                <Text style={styles.Text_1052_1483}>Quick chat</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e4/6019/aacda9a364ea7e94d3bbb4c842ec7ef5"
                }}
                style={styles.ImageBackground_1052_1484}
              />
            </View>
          </View>
          <View style={styles.View_1052_1486} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b406/3060/5f7b24279877726f167724d4b13591ad"
            }}
            style={styles.ImageBackground_1052_1487}
          />
          <View style={styles.View_1052_1488} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f29f/47b7/e053eecd50789a249700cf088f904842"
            }}
            style={styles.ImageBackground_1052_1489}
          />
          <View style={styles.View_1052_1490}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9657/61fb/54d6f0b291d5d613c8ee00b3f3e3e74b"
              }}
              style={styles.ImageBackground_1052_1491}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9657/61fb/54d6f0b291d5d613c8ee00b3f3e3e74b"
              }}
              style={styles.ImageBackground_1052_1492}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e75/abec/01dcef501822459e1c0c0b6ac2eb3d22"
              }}
              style={styles.ImageBackground_1052_1493}
            />
          </View>
          <View style={styles.View_1052_1494}>
            <Text style={styles.Text_1052_1494}>Ali Aziz</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("1034%") },
  ImageBackground_1018_2030: {
    width: wp("7%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_1018_2031: {
    width: wp("24%"),
    height: hp("52%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_1018_2032: {
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
  ImageBackground_1018_2033: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1018_2034: {
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
  View_1018_2035: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1018_2036: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_1018_2045: {
    width: wp("22%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_1018_2046: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1018_2046: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2047: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_1018_2047: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2048: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_1018_2048: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2049: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_1018_2049: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2050: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_1018_2050: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2053: {
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_1018_2053: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2055: {
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
  Text_1018_2055: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2056: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("82%")
  },
  View_1018_2057: {
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
  View_1018_2058: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_1018_2058: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1018_2059: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("585%"),
    minHeight: hp("585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1018_2133: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_1018_2133: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2216: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("137%")
  },
  View_1018_2217: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(227, 67, 24, 1)"
  },
  ImageBackground_1018_2218: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("25%")
  },
  ImageBackground_1018_2219: {
    width: wp("46%"),
    height: hp("40%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_1018_2220: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_1018_2220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2221: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_1018_2221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1018_2222: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  ImageBackground_1018_2223: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("89%")
  },
  View_1018_2224: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("40%")
  },
  View_1018_2225: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1018_2226: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1018_2226: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.897140502929688,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2227: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1018_2227: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.897140502929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2228: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  ImageBackground_1018_2229: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1018_2230: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1018_2235: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("52%")
  },
  View_1018_2236: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1018_2237: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("14%")
  },
  View_1018_2238: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(6, 197, 222, 1)",
    borderWidth: 0.7538642883300781
  },
  View_1018_2239: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1018_2239: {
    color: "rgba(6, 197, 222, 1)",
    fontSize: 9.307965278625488,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22615930557250977,
    textTransform: "none"
  },
  View_1018_2240: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%")
  },
  View_1018_2241: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(49, 216, 67, 1)",
    borderWidth: 0.7538642883300781
  },
  View_1018_2242: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1018_2242: {
    color: "rgba(49, 216, 67, 1)",
    fontSize: 9.307965278625488,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22615930557250977,
    textTransform: "none"
  },
  ImageBackground_1018_2243: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%")
  },
  View_1018_2244: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1018_2244: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 17.10820198059082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2245: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_1018_2245: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 14.092742919921875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3618548583984375,
    textTransform: "none"
  },
  View_1018_2246: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_1018_2246: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.569557189941406,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2713911437988281,
    textTransform: "none"
  },
  View_1018_2247: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1018_2247: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.569557189941406,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2713911437988281,
    textTransform: "none"
  },
  View_1018_2248: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_1018_2249: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1018_2251: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1018_2252: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("69%")
  },
  View_1018_2253: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1018_2254: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1018_2254: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.79805850982666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6271844506263733,
    textTransform: "none"
  },
  View_1018_2255: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1018_2255: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.79805850982666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6271844506263733,
    textTransform: "none"
  },
  View_1018_2256: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1018_2256: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.79805850982666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6271844506263733,
    textTransform: "none"
  },
  ImageBackground_1018_2257: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_1018_2258: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%")
  },
  ImageBackground_1018_2259: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%")
  },
  View_1018_2260: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1018_2260: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.543689727783203,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2261: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1018_2261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.543689727783203,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2262: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1018_2262: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.543689727783203,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1018_2263: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  ImageBackground_1018_2264: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%")
  },
  ImageBackground_1018_2265: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  ImageBackground_1018_2266: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("6%")
  },
  ImageBackground_1018_2267: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%")
  },
  View_1018_2268: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1018_2268_962_1399: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1018_2268_962_1400: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I1018_2268_962_1401: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I1018_2268_962_1402: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1018_2268_962_1406: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I1018_2268_962_1409: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I1018_2268_962_1410: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I1018_2268_962_1411: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_1018_2269: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("246%")
  },
  View_1018_2270: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(57, 77, 113, 1)"
  },
  View_1018_2277: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_1018_2277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2278: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_1018_2278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1034_1622: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  ImageBackground_1018_2271: {
    width: wp("6%"),
    height: hp("63%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_1018_2272: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("56%")
  },
  ImageBackground_1018_2273: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2274: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2275: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2276: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1018_2279: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_1018_2280: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  View_1018_2281: {
    width: wp("3%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    justifyContent: "flex-start"
  },
  Text_1018_2281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "uppercase"
  },
  View_1018_2282: {
    width: wp("2%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_1018_2282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.64,
    textTransform: "uppercase"
  },
  View_1018_2283: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1018_2283_993_1662: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1018_2284: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("69%")
  },
  View_1018_2285: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1018_2286: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1018_2287: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2288: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2289: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("33%")
  },
  ImageBackground_1018_2290: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    resizeMode: "cover"
  },
  View_1046_1321: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("398%")
  },
  View_1046_1322: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 92, 113, 1)"
  },
  ImageBackground_1047_1393: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("36%")
  },
  View_1046_1323: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_1046_1323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1046_1324: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1046_1324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1046_1363: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%")
  },
  ImageBackground_1047_1390: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  ImageBackground_1048_1477: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%")
  },
  ImageBackground_1047_1394: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("48%")
  },
  View_1048_1439: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("519%")
  },
  View_1048_1440: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 193, 127, 1)"
  },
  View_1048_1442: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_1048_1442: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1048_1443: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1048_1443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1048_1522: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%")
  },
  ImageBackground_1048_1523: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1048_1524: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1048_1525: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1048_1526: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1048_1527: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1048_1528: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1048_1529: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1050_1625: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("633%")
  },
  View_1050_1626: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1050_1627: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_1050_1627: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1050_1628: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_1050_1628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1050_1629: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%")
  },
  ImageBackground_1050_1630: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1050_1631: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1050_1632: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1050_1633: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1050_1634: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1050_1635: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1050_1636: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1051_1699: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("7%")
  },
  View_1051_1700: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_1051_1701: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1051_1704: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("32%")
  },
  ImageBackground_1051_1702: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-4%")
  },
  ImageBackground_1051_1703: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-18%")
  },
  View_1051_1731: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  },
  ImageBackground_1051_1732: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1051_1733: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_1047_1395: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("398%")
  },
  ImageBackground_1047_1396: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("406%")
  },
  ImageBackground_1046_1385: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("399%")
  },
  View_1047_1410: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("390%")
  },
  View_1046_1366: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1046_1365: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1046_1360: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1046_1361: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_1047_1408: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  View_1047_1407: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("418%")
  },
  ImageBackground_1047_1404: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1047_1405: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_1047_1403: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("441%")
  },
  ImageBackground_1047_1398: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1047_1399: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_1047_1400: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  ImageBackground_1047_1401: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1048_1466: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("409%")
  },
  ImageBackground_1048_1467: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1048_1468: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1048_1469: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1048_1470: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1048_1471: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1048_1472: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1048_1473: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1048_1547: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("519%")
  },
  View_1048_1546: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(21, 193, 127, 1)"
  },
  ImageBackground_1048_1492: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1048_1478: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("497%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0
  },
  View_1048_1550: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("578%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1048_1480: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("546%")
  },
  View_1048_1481: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1048_1482: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1048_1483: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    backgroundColor: "rgba(240, 244, 247, 1)"
  },
  ImageBackground_1048_1484: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%")
  },
  ImageBackground_1048_1485: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%")
  },
  ImageBackground_1048_1486: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%")
  },
  ImageBackground_1048_1479: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("578%")
  },
  ImageBackground_1048_1487: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("569%")
  },
  ImageBackground_1051_1657: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("653%")
  },
  ImageBackground_1051_1728: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("665%")
  },
  ImageBackground_1051_1729: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("682%")
  },
  ImageBackground_1051_1730: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("698%")
  },
  View_1051_1863: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("992%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1051_1863_162_291: {
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
  ImageBackground_I1051_1863_193_1: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%")
  },
  View_I1051_1863_162_293: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("24%")
  },
  View_I1051_1863_162_294: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1051_1863_162_294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1051_1863_162_295: {
    width: wp("21%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1051_1863_162_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1051_1863_173_9: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("33%")
  },
  View_I1051_1863_193_11: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%")
  },
  View_I1051_1863_193_10: {
    width: wp("16%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1052_1472: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("273%"),
    minHeight: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("741%")
  },
  View_1051_1802: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1051_1799: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1051_1800: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("132%"),
    minHeight: hp("132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_1051_1804: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1051_1817: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_1051_1817: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1051_1818: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_1051_1818: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1051_1819: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_1051_1819: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1051_1824: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("87%")
  },
  View_1051_1825: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_1051_1825: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1051_1826: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_1051_1826: {
    color: "rgba(0, 1, 15, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1051_1827: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1051_1842: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("87%")
  },
  ImageBackground_1051_1846: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("87%")
  },
  ImageBackground_1051_1854: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("87%")
  },
  View_1051_1828: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1051_1828_1038_1860: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1051_1828_1038_1861: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I1051_1828_1038_1862: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I1051_1828_1038_1863: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1051_1828_1038_1867: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I1051_1828_1038_1870: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I1051_1828_1038_1871: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I1051_1828_1038_1872: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_1051_1858: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("58%")
  },
  View_1052_1473: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("126%")
  },
  View_1052_1474: {
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
  ImageBackground_1052_1475: {
    width: wp("24%"),
    height: hp("52%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_1052_1476: {
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
  Text_1052_1476: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1477: {
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
  Text_1052_1477: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1478: {
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
  View_1052_1479: {
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
  Text_1052_1479: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1052_1480: {
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
  View_1052_1481: {
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
  View_1052_1482: {
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
  View_1052_1483: {
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
  Text_1052_1483: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1052_1484: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1052_1486: {
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
  ImageBackground_1052_1487: {
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
  View_1052_1488: {
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
  ImageBackground_1052_1489: {
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
  View_1052_1490: {
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
  ImageBackground_1052_1491: {
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
  ImageBackground_1052_1492: {
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
  ImageBackground_1052_1493: {
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
  View_1052_1494: {
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
  Text_1052_1494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
