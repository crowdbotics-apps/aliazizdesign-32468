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
        style={styles.ImageBackground_1018_1747}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc3e/5bc7/3dfc026291b2949617dddc58a43b1dc3"
        }}
        style={styles.ImageBackground_1018_1748}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac4d/0a98/f5be11278a65f85bfc8488b4118726f6"
        }}
        style={styles.ImageBackground_1018_1749}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a90e/fd41/d47444271e720612743fe424592327dd"
        }}
        style={styles.ImageBackground_1018_1750}
      />
      <View style={styles.View_1018_1751}>
        <View style={styles.View_1018_1752} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a84/9bd6/25c230375a237c421ba086fcd2046a8c"
          }}
          style={styles.ImageBackground_1018_1753}
        />
        <View style={styles.View_1018_1762}>
          <View style={styles.View_1018_1763}>
            <Text style={styles.Text_1018_1763}>about</Text>
          </View>
          <View style={styles.View_1018_1764}>
            <Text style={styles.Text_1018_1764}>work</Text>
          </View>
          <View style={styles.View_1018_1765}>
            <Text style={styles.Text_1018_1765}>process</Text>
          </View>
          <View style={styles.View_1018_1766}>
            <Text style={styles.Text_1018_1766}>uncut &amp; raw</Text>
          </View>
        </View>
        <View style={styles.View_1018_1767}>
          <Text style={styles.Text_1018_1767}>hello@aliaziz.design</Text>
        </View>
      </View>
      <View style={styles.View_1018_1768}>
        <View style={styles.View_I1018_1768_162_91} />
        <View style={styles.View_I1018_1768_162_92}>
          <Text style={styles.Text_I1018_1768_162_92}>submit</Text>
        </View>
        <View style={styles.View_I1018_1768_162_94}>
          <Text style={styles.Text_I1018_1768_162_94}>
            you have a cool project?
          </Text>
        </View>
        <View style={styles.View_I1018_1768_162_277} />
        <View style={styles.View_I1018_1768_162_278}>
          <Text style={styles.Text_I1018_1768_162_278}>
            By submitting this form you agree to the adaptable privacy policy
            &amp; consent to your contact details being collected.
          </Text>
        </View>
        <View style={styles.View_I1018_1768_162_279} />
        <View style={styles.View_I1018_1768_162_280} />
        <View style={styles.View_I1018_1768_162_281} />
        <View style={styles.View_I1018_1768_162_282} />
        <View style={styles.View_I1018_1768_162_283} />
        <View style={styles.View_I1018_1768_162_284}>
          <Text style={styles.Text_I1018_1768_162_284}>Full Name</Text>
        </View>
        <View style={styles.View_I1018_1768_162_285}>
          <Text style={styles.Text_I1018_1768_162_285}>Email</Text>
        </View>
        <View style={styles.View_I1018_1768_162_286}>
          <Text style={styles.Text_I1018_1768_162_286}>Contact No</Text>
        </View>
        <View style={styles.View_I1018_1768_162_287}>
          <Text style={styles.Text_I1018_1768_162_287}>How can we help?</Text>
        </View>
        <View style={styles.View_I1018_1768_162_288}>
          <Text style={styles.Text_I1018_1768_162_288}>Attach a file</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f0c/be20/ccb40fd97c094adbb3afa9faec194568"
          }}
          style={styles.ImageBackground_I1018_1768_162_289}
        />
      </View>
      <View style={styles.View_1018_1769}>
        <View style={styles.View_I1018_1769_162_291} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bb/137c/459dba5f57861ff4757921fc3839b2e0"
          }}
          style={styles.ImageBackground_I1018_1769_193_1}
        />
        <View style={styles.View_I1018_1769_162_293}>
          <View style={styles.View_I1018_1769_162_294}>
            <Text style={styles.Text_I1018_1769_162_294}>
              Instagram + Facebook + Behance + Dribbble
            </Text>
          </View>
          <View style={styles.View_I1018_1769_162_295}>
            <Text style={styles.Text_I1018_1769_162_295}>
              Copyright © 2010-2020 aliaziz.design . All rights reserved.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5819/6202/c8f280a9d07b1579fe379f0cbae2a8ac"
          }}
          style={styles.ImageBackground_I1018_1769_173_9}
        />
        <View style={styles.View_I1018_1769_193_11}>
          <View style={styles.View_I1018_1769_193_10} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1940/3e58/dfe0fca393e6e283384e38f11bde8058"
            }}
            style={styles.ImageBackground_I1018_1769_173_7}
          />
        </View>
      </View>
      <View style={styles.View_1018_1770}>
        <Text style={styles.Text_1018_1770}>a creative problem solver</Text>
      </View>
      <View style={styles.View_1018_1772}>
        <Text style={styles.Text_1018_1772}>👋 Hi, I&#39;m ali</Text>
      </View>
      <View style={styles.View_1018_1773}>
        <View style={styles.View_1018_1774} />
        <View style={styles.View_1018_1775}>
          <Text style={styles.Text_1018_1775}>Discuss Project</Text>
        </View>
      </View>
      <View style={styles.View_1018_1776} />
      <View style={styles.View_1034_1565}>
        <View style={styles.View_1018_2010}>
          <View style={styles.View_1018_2011}>
            <Text style={styles.Text_1018_2011}>Popstroke</Text>
          </View>
          <View style={styles.View_1018_2012}>
            <Text style={styles.Text_1018_2012}>
              Complete product design for leading global recruitment firm for
              revenue-generating talent
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/7b12/ffc3e8177ddd71b9189bbdb39cb1779c"
            }}
            style={styles.ImageBackground_1018_2013}
          />
          <View style={styles.View_1018_2014}>
            <View style={styles.View_1018_2015} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c226/4a1b/d19b1b82cb7be060d40fa2684f07a08a"
              }}
              style={styles.ImageBackground_1018_2016}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bde/8bb4/d0c8c23a6553cd50d312bbf4f3d4303e"
              }}
              style={styles.ImageBackground_1018_2017}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/cf8d/7d8134bda41293ce0f9a20643a8c3ac2"
              }}
              style={styles.ImageBackground_1018_2018}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b410/b934/64dc2e838ce2de318a3d25f47e22caea"
              }}
              style={styles.ImageBackground_1018_2019}
            />
            <View style={styles.View_1018_2020}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5b2/8f4a/d2338207107bb52b2755c709ce38efe9"
                }}
                style={styles.ImageBackground_1018_2021}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b35/3452/54d58b01b070c8cd575d7cd16a274533"
                }}
                style={styles.ImageBackground_1018_2022}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/644a/912f/94a4c79390743806a7a5e0bce44d44ad"
                }}
                style={styles.ImageBackground_1018_2023}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6516/1812/f281b655311840c069241d82adf6207b"
              }}
              style={styles.ImageBackground_1018_2024}
            />
            <View style={styles.View_1018_2025}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec97/5741/1f25404ceea250c82f4c2e5f1273a87e"
                }}
                style={styles.ImageBackground_1018_2026}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f2d/ceb0/08afbdc97b991116d0c306794cf21da5"
                }}
                style={styles.ImageBackground_1018_2027}
              />
            </View>
          </View>
          <View style={styles.View_1018_2028} />
        </View>
      </View>
      <View style={styles.View_1018_1942}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea4/e1ee/42dee435aad8b9f4ec1b83cddd0b339d"
          }}
          style={styles.ImageBackground_1018_1943}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ede1/43ea/f72d4f1c83f237aaf0e8eff0e16dc197"
          }}
          style={styles.ImageBackground_1018_1944}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c78/3ce4/b33d436289a8571f46f99d49d0200fb1"
          }}
          style={styles.ImageBackground_1018_1946}
        />
        <View style={styles.View_1018_1947}>
          <Text style={styles.Text_1018_1947}>Betts Recruiting</Text>
        </View>
        <View style={styles.View_1018_1948}>
          <Text style={styles.Text_1018_1948}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <View style={styles.View_1018_1949}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d8d/89e1/550a47687a20c85f35c7bcd1688bc841"
            }}
            style={styles.ImageBackground_I1018_1949_962_1399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde3/de70/c1c707cb8f2512c1adf65e3d467c5b46"
            }}
            style={styles.ImageBackground_I1018_1949_962_1400}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25fc/7082/b3140d55bed94151fd20c37f90ac1b9d"
            }}
            style={styles.ImageBackground_I1018_1949_962_1401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6339/984b/559ab6074bf6f18eeae9db8ac2ec4fc9"
            }}
            style={styles.ImageBackground_I1018_1949_962_1402}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ca/7d06/e6ec90e09008b2726b736866ff0b6271"
            }}
            style={styles.ImageBackground_I1018_1949_962_1406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/c4e5/e141b095b7c749c017a517af7616a29f"
            }}
            style={styles.ImageBackground_I1018_1949_962_1409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/c4e5/e141b095b7c749c017a517af7616a29f"
            }}
            style={styles.ImageBackground_I1018_1949_962_1410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/940c/d171/1d087b0bca511ce4095e804d9e76e9b2"
            }}
            style={styles.ImageBackground_I1018_1949_962_1411}
          />
        </View>
        <View style={styles.View_1018_1950} />
        <View style={styles.View_1018_1951}>
          <View style={styles.View_1018_1952} />
          <View style={styles.View_1018_1953}>
            <Text style={styles.Text_1018_1953}>Position Desired</Text>
          </View>
          <View style={styles.View_1018_1954}>
            <Text style={styles.Text_1018_1954}>Account Executive</Text>
          </View>
          <View style={styles.View_1018_1955}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2461/a6c8/074b789ba8dc1a376f562a9e7dad2986"
              }}
              style={styles.ImageBackground_1018_1956}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb72/56a6/39471869edef5057c9bcb0be42cbecd6"
              }}
              style={styles.ImageBackground_1018_1957}
            />
          </View>
        </View>
        <View style={styles.View_1018_1962}>
          <View style={styles.View_1018_1963} />
          <View style={styles.View_1018_1964}>
            <View style={styles.View_1018_1965} />
            <View style={styles.View_1018_1966}>
              <Text style={styles.Text_1018_1966}>$101-250</Text>
            </View>
          </View>
          <View style={styles.View_1018_1967}>
            <View style={styles.View_1018_1968} />
            <View style={styles.View_1018_1969}>
              <Text style={styles.Text_1018_1969}>Active</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7da2/db49/8f7d585279ed42be7070bede1e890cd7"
            }}
            style={styles.ImageBackground_1018_1970}
          />
          <View style={styles.View_1018_1971}>
            <Text style={styles.Text_1018_1971}>Anna White</Text>
          </View>
          <View style={styles.View_1018_1972}>
            <Text style={styles.Text_1018_1972}>Sr Account Executive</Text>
          </View>
          <View style={styles.View_1018_1973}>
            <Text style={styles.Text_1018_1973}>Deal Size</Text>
          </View>
          <View style={styles.View_1018_1974}>
            <Text style={styles.Text_1018_1974}>Status</Text>
          </View>
          <View style={styles.View_1018_1975}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77ec/4582/dcff706f5c2911356b692e46dc8c71a4"
              }}
              style={styles.ImageBackground_1018_1976}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21b0/e401/8476ff834a722aad14a8a5113812c0f3"
              }}
              style={styles.ImageBackground_1018_1978}
            />
          </View>
        </View>
        <View style={styles.View_1018_1979}>
          <View style={styles.View_1018_1980} />
          <View style={styles.View_1018_1981}>
            <Text style={styles.Text_1018_1981}>Pending</Text>
          </View>
          <View style={styles.View_1018_1982}>
            <Text style={styles.Text_1018_1982}>Interviewing</Text>
          </View>
          <View style={styles.View_1018_1983}>
            <Text style={styles.Text_1018_1983}>Offer</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75a0/217d/34f2d3549e6ce37d244f9f3d5ed94b8a"
            }}
            style={styles.ImageBackground_1018_1984}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af95/a443/2191ddf4577d43c391c6cbd1920884f4"
            }}
            style={styles.ImageBackground_1018_1985}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee4f/3654/2690faf891f0d9677701e2c5e78c2e08"
            }}
            style={styles.ImageBackground_1018_1986}
          />
          <View style={styles.View_1018_1987}>
            <Text style={styles.Text_1018_1987}>1</Text>
          </View>
          <View style={styles.View_1018_1988}>
            <Text style={styles.Text_1018_1988}>3</Text>
          </View>
          <View style={styles.View_1018_1989}>
            <Text style={styles.Text_1018_1989}>1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31fd/26b6/0d6829d8e56980d2e3eb0860b81f5ce0"
            }}
            style={styles.ImageBackground_1018_1990}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/947f/d9a1/ebeae057f49d5b0c53727d327f1e4f30"
            }}
            style={styles.ImageBackground_1018_1991}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbd1/937c/b3339668dc3e462ec1dd1cc41ce4e0f2"
            }}
            style={styles.ImageBackground_1018_1992}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5679/5303/9937c705dabcfc6dd257a686d3a97ad5"
            }}
            style={styles.ImageBackground_1018_1993}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff4e/67d5/270a0aacf7543cb5f7fe24f3e30cd2df"
            }}
            style={styles.ImageBackground_1018_1994}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f6/84b1/9e06e68ad9a01e2bf3f902a72a3d896b"
          }}
          style={styles.ImageBackground_1018_1995}
        />
      </View>
      <View style={styles.View_1018_1777}>
        <Text style={styles.Text_1018_1777}>
          I approach design with a goal in mind and enjoy assisting
          entrepreneurs/startups in their endeavours.
        </Text>
      </View>
      <View style={styles.View_1018_1848}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8f/6cd4/51bdc2046bd3b01bf6d20fbb575e5e74"
          }}
          style={styles.ImageBackground_1018_1849}
        />
        <View style={styles.View_1018_1850}>
          <Text style={styles.Text_1018_1850}>EHR (Healthcares)</Text>
        </View>
        <View style={styles.View_1018_1851}>
          <Text style={styles.Text_1018_1851}>
            Complete product design for leading global recruitment firm for
            revenue-generating talent
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d3e/f5f9/a369ce14a302bdbd11eef66b4b4a3406"
          }}
          style={styles.ImageBackground_1018_1852}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f9f/4646/ac8411b5959b5b1b10aed97ca4eaf5c1"
          }}
          style={styles.ImageBackground_1018_1857}
        />
        <View style={styles.View_1018_1859} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10be/38d4/c815c365d18c0839cc1b1e4a814679d0"
          }}
          style={styles.ImageBackground_1018_1860}
        />
        <View style={styles.View_1018_1861}>
          <View style={styles.View_1018_1862}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2320/e7ef/21344f6ba0e39b6f2c25cc89fb3448dd"
              }}
              style={styles.ImageBackground_1018_1863}
            />
            <View style={styles.View_1018_1864} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe02/ff42/de0473443c9ff19a5abd60bcba99a559"
            }}
            style={styles.ImageBackground_1018_1865}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/522f/0b89/dd3c8029ae02ae91b685ddd8eeb12a59"
            }}
            style={styles.ImageBackground_1018_1866}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74e5/4d15/e01a1346119c1ccdcb623c842c9a6649"
            }}
            style={styles.ImageBackground_1018_1867}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26c6/4110/a2686b72bb1efffcbe5b8f084a8d42f2"
          }}
          style={styles.ImageBackground_1018_1868}
        />
        <View style={styles.View_1018_1869}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d8d/89e1/550a47687a20c85f35c7bcd1688bc841"
            }}
            style={styles.ImageBackground_I1018_1869_962_1399}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde3/de70/c1c707cb8f2512c1adf65e3d467c5b46"
            }}
            style={styles.ImageBackground_I1018_1869_962_1400}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25fc/7082/b3140d55bed94151fd20c37f90ac1b9d"
            }}
            style={styles.ImageBackground_I1018_1869_962_1401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6339/984b/559ab6074bf6f18eeae9db8ac2ec4fc9"
            }}
            style={styles.ImageBackground_I1018_1869_962_1402}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ca/7d06/e6ec90e09008b2726b736866ff0b6271"
            }}
            style={styles.ImageBackground_I1018_1869_962_1406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/c4e5/e141b095b7c749c017a517af7616a29f"
            }}
            style={styles.ImageBackground_I1018_1869_962_1409}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a99/c4e5/e141b095b7c749c017a517af7616a29f"
            }}
            style={styles.ImageBackground_I1018_1869_962_1410}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/940c/d171/1d087b0bca511ce4095e804d9e76e9b2"
            }}
            style={styles.ImageBackground_I1018_1869_962_1411}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/192d/8f98/c82b0743be59815539a371c042926fbc"
        }}
        style={styles.ImageBackground_1050_1651}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f72b/e0d0/645258ac607f351ca4432dd442f4372d"
        }}
        style={styles.ImageBackground_1050_1652}
      />
      <View style={styles.View_1048_1618}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f230/7ad8/76181954c1c84ba4495e8213a241cbe5"
          }}
          style={styles.ImageBackground_1048_1583}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a013/f629/ba3261cb8473582058549c22403833c3"
          }}
          style={styles.ImageBackground_1050_1646}
        />
        <View style={styles.View_1048_1590}>
          <View style={styles.View_1048_1591}>
            <View style={styles.View_1048_1592}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b178/e588/be9991337948ebdff60e8c57431cdd5d"
                }}
                style={styles.ImageBackground_1048_1593}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c7/1f64/9debf7f01d83b7cc8029da08eb6b5a1b"
              }}
              style={styles.ImageBackground_1048_1594}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a74d/f4fa/b6ab62faf6d106e46905fef581a94502"
            }}
            style={styles.ImageBackground_1048_1595}
          />
        </View>
        <View style={styles.View_1048_1596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9025/c14f/572646ea66d94a9432b4f1bdd8e82053"
            }}
            style={styles.ImageBackground_1048_1597}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c2/b9d5/ab4e797ffca4d97f5e653347611928e4"
            }}
            style={styles.ImageBackground_1048_1598}
          />
        </View>
        <View style={styles.View_1048_1599}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b973/8f11/9c571d0c37222cbb5a0b02f835761e14"
            }}
            style={styles.ImageBackground_1048_1600}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b1d/6632/2ddd1ec776c4896caf2b34182d8b6881"
            }}
            style={styles.ImageBackground_1048_1601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e497/52ee/1b01eb1ea955e4421756f119833d83a3"
            }}
            style={styles.ImageBackground_1048_1602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4551/44db/c987056a5bc7b925cfcd0dbccc0c1624"
            }}
            style={styles.ImageBackground_1048_1603}
          />
        </View>
        <View style={styles.View_1048_1605} />
      </View>
      <View style={styles.View_1048_1606}>
        <Text style={styles.Text_1048_1606}>Patient app</Text>
      </View>
      <View style={styles.View_1051_1784}>
        <Text style={styles.Text_1051_1784}>Dubai Mall</Text>
      </View>
      <View style={styles.View_1048_1607}>
        <Text style={styles.Text_1048_1607}>
          Complete product design for leading global recruitment firm for
          revenue-generating talent
        </Text>
      </View>
      <View style={styles.View_1051_1785}>
        <Text style={styles.Text_1051_1785}>
          Complete product design for leading global recruitment firm for
          revenue-generating talent
        </Text>
      </View>
      <View style={styles.View_1048_1608}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee7e/3c5a/db7bf2ec5fb551acf2311efd4f28cd0c"
          }}
          style={styles.ImageBackground_1048_1609}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2032/4cef/b2568d77b4a3eeae3fb0f598eba5bdab"
          }}
          style={styles.ImageBackground_1048_1610}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/870f/1421/ab9f85b453299b12d9a7dbba7ae9c82e"
          }}
          style={styles.ImageBackground_1048_1611}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9630/9a02/a095704db662d7e4e76b36067ff65077"
          }}
          style={styles.ImageBackground_1048_1612}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c92/bdd5/fdaefa7abf734f08d1d49c70b3bd10f6"
          }}
          style={styles.ImageBackground_1048_1613}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b1/07df/439c3526c436658dec7724b7186cb887"
          }}
          style={styles.ImageBackground_1048_1614}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf40/7f03/5145c1f982ffee45a7959deed64073bd"
          }}
          style={styles.ImageBackground_1048_1615}
        />
      </View>
      <View style={styles.View_1051_1786}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6be/dd3a/90dead315c0148b9f5722a2075773191"
          }}
          style={styles.ImageBackground_1051_1787}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2032/4cef/b2568d77b4a3eeae3fb0f598eba5bdab"
          }}
          style={styles.ImageBackground_1051_1788}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be2e/ce10/492e1884ff299f72e9613266ac25b6cc"
          }}
          style={styles.ImageBackground_1051_1789}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9630/9a02/a095704db662d7e4e76b36067ff65077"
          }}
          style={styles.ImageBackground_1051_1790}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c92/bdd5/fdaefa7abf734f08d1d49c70b3bd10f6"
          }}
          style={styles.ImageBackground_1051_1791}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b1/07df/439c3526c436658dec7724b7186cb887"
          }}
          style={styles.ImageBackground_1051_1792}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf40/7f03/5145c1f982ffee45a7959deed64073bd"
          }}
          style={styles.ImageBackground_1051_1793}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_1050_1647} />
      <View style={styles.View_1052_1363}>
        <View style={styles.View_1051_1771}>
          <View style={styles.View_1051_1772} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0be4/6595/947ac62e954bafcf38c1d2849f4706ad"
            }}
            style={styles.ImageBackground_1051_1773}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e17b/28ad/291efcff65af82e228d6c08dfaf770c9"
            }}
            style={styles.ImageBackground_1051_1774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2027/927d/28118c2811de9367e4e706fd03f47c56"
            }}
            style={styles.ImageBackground_1051_1775}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f824/e262/ef9b04f64b06c060a8ca3ed48294297a"
            }}
            style={styles.ImageBackground_1051_1776}
          />
        </View>
        <View style={styles.View_1051_1777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5b/4943/106a042a3f489085f10ab6bf35761aa6"
            }}
            style={styles.ImageBackground_1051_1778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e18c/382a/94ca2ae1384ccb1cf1bf68dade3502a6"
            }}
            style={styles.ImageBackground_1051_1779}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a066/4f89/7c37755e9bd6a3eb9b265adcc9366cd9"
          }}
          style={styles.ImageBackground_1051_1780}
        />
        <View style={styles.View_1051_1796} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72f/8730/95471cb06a765cf6438399afec0391a7"
          }}
          style={styles.ImageBackground_1051_1781}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e037/8419/fc34f57c638aa3518e209f1e044511e1"
          }}
          style={styles.ImageBackground_1051_1782}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a84/b928/e16202a51f554dbb5ddd2b45c32b70e7"
          }}
          style={styles.ImageBackground_1051_1783}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("1433%") },
  ImageBackground_1018_1747: {
    width: wp("7%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_1018_1748: {
    width: wp("24%"),
    height: hp("52%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_1018_1749: {
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
  ImageBackground_1018_1750: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1018_1751: {
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
  View_1018_1752: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1018_1753: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_1018_1762: {
    width: wp("22%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_1018_1763: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1018_1763: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1764: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_1018_1764: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1765: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_1018_1765: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1766: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_1018_1766: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1767: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_1018_1767: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1768: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1018_1768_162_91: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  View_I1018_1768_162_92: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I1018_1768_162_94: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I1018_1768_162_94: {
    fontSize: 91,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1768_162_277: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("32%"),
    borderColor: "rgba(19, 0, 255, 1)",
    borderWidth: 1
  },
  View_I1018_1768_162_278: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1768_162_279: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(221, 221, 221, 1)",
    borderWidth: 1
  },
  View_I1018_1768_162_280: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(221, 221, 221, 1)",
    borderWidth: 1
  },
  View_I1018_1768_162_281: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("20%"),
    borderColor: "rgba(19, 0, 255, 1)",
    borderWidth: 1
  },
  View_I1018_1768_162_282: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(221, 221, 221, 1)",
    borderWidth: 1
  },
  View_I1018_1768_162_283: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(221, 221, 221, 1)",
    borderWidth: 1
  },
  View_I1018_1768_162_284: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1768_162_285: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1768_162_286: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1768_162_287: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1768_162_288: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1768_162_288: {
    color: "rgba(19, 0, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1018_1768_162_289: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("23%")
  },
  View_1018_1769: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1018_1769_162_291: {
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
  ImageBackground_I1018_1769_193_1: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%")
  },
  View_I1018_1769_162_293: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("24%")
  },
  View_I1018_1769_162_294: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1769_162_294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1018_1769_162_295: {
    width: wp("21%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1018_1769_162_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1018_1769_173_9: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("33%")
  },
  View_I1018_1769_193_11: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%")
  },
  View_I1018_1769_193_10: {
    width: wp("16%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1018_1769_173_7: {
    width: wp("16%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1018_1770: {
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_1018_1770: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1772: {
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
  Text_1018_1772: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1773: {
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
  View_1018_1774: {
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
  View_1018_1775: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_1018_1775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1018_1776: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("976%"),
    minHeight: hp("976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125%"),
    backgroundColor: "rgba(0, 1, 15, 1)"
  },
  View_1034_1565: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("471%")
  },
  View_1018_2010: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1018_2011: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_1018_2011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_2012: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_1018_2012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1018_2013: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107%"),
    resizeMode: "cover"
  },
  View_1018_2014: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_1018_2015: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1018_2016: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1018_2017: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("137%"),
    minHeight: hp("137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("23%")
  },
  ImageBackground_1018_2018: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("190%"),
    minHeight: hp("190%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-20%")
  },
  ImageBackground_1018_2019: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("24%")
  },
  View_1018_2020: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("63%")
  },
  ImageBackground_1018_2021: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2022: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2023: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2024: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("48%")
  },
  View_1018_2025: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("29%")
  },
  ImageBackground_1018_2026: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1018_2027: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_1018_2028: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("63%")
  },
  View_1018_1942: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("313%"),
    backgroundColor: "rgba(0, 1, 15, 1)",
    overflow: "hidden"
  },
  ImageBackground_1018_1943: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("80%")
  },
  ImageBackground_1018_1944: {
    width: wp("29%"),
    height: hp("40%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_1018_1946: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("418%"),
    minHeight: hp("418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("-12%"),
    resizeMode: "cover"
  },
  View_1018_1947: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_1018_1947: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1948: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_1018_1948: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1949: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1018_1949_962_1399: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1018_1949_962_1400: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I1018_1949_962_1401: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I1018_1949_962_1402: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1018_1949_962_1406: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I1018_1949_962_1409: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I1018_1949_962_1410: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I1018_1949_962_1411: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_1018_1950: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("56%")
  },
  View_1018_1951: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("56%")
  },
  View_1018_1952: {
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
  View_1018_1953: {
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
  Text_1018_1953: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.897140502929688,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1954: {
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
  Text_1018_1954: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.897140502929688,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1955: {
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
  ImageBackground_1018_1956: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1018_1957: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1018_1962: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("70%")
  },
  View_1018_1963: {
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
  View_1018_1964: {
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
  View_1018_1965: {
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
  View_1018_1966: {
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
  Text_1018_1966: {
    color: "rgba(6, 197, 222, 1)",
    fontSize: 9.307965278625488,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22615930557250977,
    textTransform: "none"
  },
  View_1018_1967: {
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
  View_1018_1968: {
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
  View_1018_1969: {
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
  Text_1018_1969: {
    color: "rgba(49, 216, 67, 1)",
    fontSize: 9.307965278625488,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22615930557250977,
    textTransform: "none"
  },
  ImageBackground_1018_1970: {
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
  View_1018_1971: {
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
  Text_1018_1971: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 17.10820198059082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1972: {
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
  Text_1018_1972: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 14.092742919921875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3618548583984375,
    textTransform: "none"
  },
  View_1018_1973: {
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
  Text_1018_1973: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.569557189941406,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2713911437988281,
    textTransform: "none"
  },
  View_1018_1974: {
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
  Text_1018_1974: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.569557189941406,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2713911437988281,
    textTransform: "none"
  },
  View_1018_1975: {
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
  ImageBackground_1018_1976: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1018_1978: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1018_1979: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("88%")
  },
  View_1018_1980: {
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
  View_1018_1981: {
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
  Text_1018_1981: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.79805850982666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6271844506263733,
    textTransform: "none"
  },
  View_1018_1982: {
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
  Text_1018_1982: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.79805850982666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6271844506263733,
    textTransform: "none"
  },
  View_1018_1983: {
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
  Text_1018_1983: {
    color: "rgba(47, 72, 88, 1)",
    fontSize: 10.79805850982666,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6271844506263733,
    textTransform: "none"
  },
  ImageBackground_1018_1984: {
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
  ImageBackground_1018_1985: {
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
  ImageBackground_1018_1986: {
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
  View_1018_1987: {
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
  Text_1018_1987: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.543689727783203,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1988: {
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
  Text_1018_1988: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.543689727783203,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1989: {
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
  Text_1018_1989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.543689727783203,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1018_1990: {
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
  ImageBackground_1018_1991: {
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
  ImageBackground_1018_1992: {
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
  ImageBackground_1018_1993: {
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
  ImageBackground_1018_1994: {
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
  ImageBackground_1018_1995: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("12%")
  },
  View_1018_1777: {
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
  Text_1018_1777: {
    color: "rgba(19, 20, 22, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1848: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("160%"),
    minHeight: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("127%"),
    backgroundColor: "rgba(0, 1, 15, 1)",
    overflow: "hidden"
  },
  ImageBackground_1018_1849: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("90%")
  },
  View_1018_1850: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_1018_1850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1018_1851: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_1018_1851: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1018_1852: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("185%"),
    minHeight: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  ImageBackground_1018_1857: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("187%"),
    minHeight: hp("187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("33%")
  },
  View_1018_1859: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("110%")
  },
  ImageBackground_1018_1860: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("119%")
  },
  View_1018_1861: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("106%")
  },
  View_1018_1862: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1018_1863: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1018_1864: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("8%"),
    backgroundColor: "rgba(240, 244, 247, 1)"
  },
  ImageBackground_1018_1865: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("4%")
  },
  ImageBackground_1018_1866: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("11%")
  },
  ImageBackground_1018_1867: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("9%")
  },
  ImageBackground_1018_1868: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("137%")
  },
  View_1018_1869: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("144%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1018_1869_962_1399: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1018_1869_962_1400: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I1018_1869_962_1401: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I1018_1869_962_1402: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I1018_1869_962_1406: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I1018_1869_962_1409: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I1018_1869_962_1410: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I1018_1869_962_1411: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_1050_1651: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("610%")
  },
  ImageBackground_1050_1652: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("622%")
  },
  View_1048_1618: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("610%")
  },
  ImageBackground_1048_1583: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("30%")
  },
  ImageBackground_1050_1646: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_1048_1590: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("20%")
  },
  View_1048_1591: {
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
  View_1048_1592: {
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
  ImageBackground_1048_1593: {
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
  ImageBackground_1048_1594: {
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
  ImageBackground_1048_1595: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("30%")
  },
  View_1048_1596: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("55%")
  },
  ImageBackground_1048_1597: {
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
  ImageBackground_1048_1598: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_1048_1599: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("50%")
  },
  ImageBackground_1048_1600: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1048_1601: {
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
  ImageBackground_1048_1602: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  ImageBackground_1048_1603: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1048_1605: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%")
  },
  View_1048_1606: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("644%"),
    justifyContent: "flex-start"
  },
  Text_1048_1606: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1051_1784: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("777%"),
    justifyContent: "flex-start"
  },
  Text_1051_1784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 74,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1048_1607: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("658%"),
    justifyContent: "flex-start"
  },
  Text_1048_1607: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1051_1785: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("791%"),
    justifyContent: "flex-start"
  },
  Text_1051_1785: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1048_1608: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("712%")
  },
  ImageBackground_1048_1609: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1048_1610: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1048_1611: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1048_1612: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1048_1613: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1048_1614: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1048_1615: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1051_1786: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("845%")
  },
  ImageBackground_1051_1787: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1051_1788: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1051_1789: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1051_1790: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1051_1791: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1051_1792: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1051_1793: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1050_1647: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("155%"),
    minHeight: hp("155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("588%")
  },
  View_1052_1363: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("116%"),
    minHeight: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("752%")
  },
  View_1051_1771: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("107%"),
    minHeight: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_1051_1772: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("107%"),
    minHeight: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_1051_1773: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("107%"),
    minHeight: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1051_1774: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("40%")
  },
  ImageBackground_1051_1775: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("141%"),
    minHeight: hp("141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("-4%")
  },
  ImageBackground_1051_1776: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("160%"),
    minHeight: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("-23%")
  },
  View_1051_1777: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  ImageBackground_1051_1778: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1051_1779: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_1051_1780: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("25%")
  },
  View_1051_1796: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  ImageBackground_1051_1781: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("41%")
  },
  ImageBackground_1051_1782: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("61%")
  },
  ImageBackground_1051_1783: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("82%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
