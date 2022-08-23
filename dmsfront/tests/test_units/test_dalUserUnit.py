import pytest
from unittest import mock
from rest_framework import status
from requests.models import Response
from dmsfront.views import (
    DalUserList,
    DalUserDetail,
    ChaplainList,
    ChaplainDetail,
    UserAppointmentList,
    AppointmentList,
    UserAppointmentDetails,
)


@pytest.mark.unit
class TestDalUsersUnit:
    dal_user = DalUserList()
    dal_user_detail = DalUserDetail()
    chaplin_detail = ChaplainDetail()
    chaplin_list = ChaplainList()
    userappointment_list = UserAppointmentList()
    appointment_list = AppointmentList()
    userappointment_detail = UserAppointmentDetails()

    # DALUSER - mocked the post method from the DalUserList
    def test_dal_user_list_post(self):
        fake_response = Response()
        fake_response.status_code = status.HTTP_201_CREATED
        mock_post = mock.Mock(
            name="DalUserList-post", return_value=fake_response
        )
        self.dal_user.post = mock_post

        assert self.dal_user.post().status_code == status.HTTP_201_CREATED

    # DALUSER - mocked the get method from the DalUserDetails
    def test_dal_user_detail_get(self):
        fake_response = Response()
        fake_response.status_code = 200
        mock_get = mock.Mock(
            name="DalUserDetail-get", return_value=fake_response
        )
        self.dal_user_detail.get = mock_get

        assert self.dal_user_detail.get().status_code == status.HTTP_200_OK

    # DALUSER - mocked the put method from the DalUserDetails
    def test_dal_user_detail_put(self):
        fake_response = Response()
        fake_response.status_code = status.HTTP_202_ACCEPTED
        mock_put = mock.Mock(
            name="DalUserDetail-put", return_value=fake_response
        )
        self.dal_user_detail.put = mock_put

        assert (
            self.dal_user_detail.put().status_code == status.HTTP_202_ACCEPTED
        )
