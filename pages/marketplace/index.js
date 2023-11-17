

import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo } from "@components/hooks/web3"
import { Button } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@components/ui/marketplace"
import { useWeb3 } from "@components/providers"

export default function Marketplace({courses}) {
  const { web3 } = useWeb3()
  const { canPurchaseCourse, account } = useWalletInfo()
  const [selectedCourse, setSelectedCourse] = useState(null)

  const purchaseCourse = order => {
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)
    console.log(hexCourseId)
    // hex course ID:
    // 0x31343130343734000000000000000000

    // address
    // 0x2eEa62DD2aAc6146D1EaA46775Be8BfF488c4589

    // 313431303437340000000000000000002eEa62DD2aAc6146D1EaA46775Be8BfF488c4589
    // Order Hash
    // c95ff6d74fb77b65c0eb2f432fad280a3e31fdc8a1fae6969e4b6ffb49b4b890
    const orderHash = web3.utils.soliditySha3(
      { type: "bytes16", value: hexCourseId },
      { type: "address", value: account.data }
    )

    console.log(orderHash)
    // t1@gmail.com
    // 7226d4b427f6d69e012f51fcbe183fa2bf47ab8f2910cc69f468ae5a672187ab
    const emailHash = web3.utils.sha3(order.email)

    console.log(emailHash)

    // 7226d4b427f6d69e012f51fcbe183fa2bf47ab8f2910cc69f468ae5a672187abc95ff6d74fb77b65c0eb2f432fad280a3e31fdc8a1fae6969e4b6ffb49b4b890
    // proof:
    // 7d994dfdda2958e193a3813a126f957952b215eaf472a60058c19c40c62eb989
    const proof = web3.utils.soliditySha3(
      { type: "bytes32", value: emailHash },
      { type: "bytes32", value: orderHash }
    )

    console.log(proof)
  }

  return (
    <>
      <div className="py-4">
        <MarketHeader />
      </div>
      <CourseList
        courses={courses}
      >
      {course =>
        <CourseCard
          key={course.id}
          course={course}
          disabled={!canPurchaseCourse}
          Footer={() =>
            <div className="mt-4">
              <Button
                onClick={() => setSelectedCourse(course)}
                disabled={!canPurchaseCourse}
                variant="lightPurple">
                Purchase
              </Button>
            </div>
          }
        />
      }
      </CourseList>
      { selectedCourse &&
        <OrderModal
          course={selectedCourse}
          onSubmit={purchaseCourse}
          onClose={() => setSelectedCourse(null)}
        />
      }
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Marketplace.Layout = BaseLayout