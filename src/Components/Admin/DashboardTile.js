import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import api from "../../Api/api";
function DashboardTile(props) {
  const [data, setData] = useState([]);
  const [faculty, setFaculty] = useState(null);
  const [alumni, setAlumni] = useState(null);
  const [student, setStudent] = useState(null);

  const getData = async () => {
    let pie = await api.get(`/alumniAgency`);
    setData(pie.data);
  };

  const getStudent = async () => {
    let studentCount = await api.get(`/studentCount`);
    setStudent(studentCount.data);
  };

  const alumniCount = async () => {
    let studentCount = await api.get(`/alumniCount`);
    setAlumni(studentCount.data);
  };

  const facultyCount = async () => {
    let facultyCount = await api.get(`/facultyCount`);
    setFaculty(facultyCount.data);
  };

  useEffect(() => {
    getData();
    getStudent();
    alumniCount();
    facultyCount();
  }, []);

  return (
    <Box w="100%">
      <Heading fontSize="2xl">Dashboard </Heading>

      <SimpleGrid
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
        w="100%"
        display="flex"
      >
        <Box p="30" rounded="md" bg="white" w={300} boxShadow="lg">
          <Text pt={5} color="teal.700">
            Total Student
          </Text>
          <Text fontSize="50px" color="teal.500" fontWeight={600}>
            {student}
          </Text>
        </Box>
        <Box p="30" rounded="md" bg="white" w={300} boxShadow="lg">
          <Text pt={5} color="teal.700">
            Graduate/Alumni
          </Text>
          <Text fontSize="50px" color="teal.500" fontWeight={600}>
            {alumni}
          </Text>
        </Box>

        <Box p="30" rounded="md" bg="white" w={300} boxShadow="lg">
          <Text pt={5} color="teal.700">
            Faculties
          </Text>
          <Text fontSize="50px" color="teal.500" fontWeight={600}>
            {faculty}
          </Text>
        </Box>
      </SimpleGrid>

      <Heading size="md" mt={5}>
        Alumni Agency{" "}
      </Heading>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          width={600}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="teal"
          label
        />

        <Tooltip />
      </PieChart>
    </Box>
  );
}

export default DashboardTile;
