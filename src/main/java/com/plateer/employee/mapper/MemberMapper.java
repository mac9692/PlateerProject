package com.plateer.employee.mapper;

import com.plateer.employee.vo.Member;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {

    public List<Member> getMemberList(String startNumber, String countNumber);

    public Integer countMember();

    public Member viewMember(String memberId);

    public Integer insertMember(Member member);

    public Integer updateMember(Member member);

    public Integer deleteMember(String memberId);

}
