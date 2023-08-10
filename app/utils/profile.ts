// format user profile data
export function formatProfileData(data: any) {
  const validatedData = {
    ...data,
    marital_status: data?.marital_status?.toString(),
    is_church_member: data?.is_church_member == "1" ? true : false,
    growth_track_completed: data?.growth_track_completed == "1" ? true : false,
    is_tither: data?.is_tither == "1" ? true : false,
    is_partner: data?.is_partner == "1" ? true : false,
    church_centre_id:
      data?.church_centre_id !== "" ? parseInt(data?.church_centre_id) : 0,
    home_cell_id: data?.home_cell_id !== "" ? parseInt(data?.home_cell_id) : 0,
    colony_id: data?.colony_id !== "" ? parseInt(data?.colony_id) : 0,
    dependents: [...data?.dependents],
    roles_and_responsibilities: [...data?.roles_and_responsibilities],
    service_team: [...data?.service_team],
    partnered_arms: [...data?.partnered_arms],
  };

  return validatedData;
}
// create user profile
export async function createProfile(
  validatedData: ProfileAPIFormat,
  access_token: string
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/create`, {
    method: "POST",
    body: JSON.stringify({
      ...validatedData,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + access_token,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to create profile");
  }

  return res.json();
}
